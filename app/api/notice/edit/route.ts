import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";
import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

// 허용된 파일 타입 정의
const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/gif',
  'image/webp',
  'image/bmp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'application/zip',
  'application/x-zip-compressed'
];

// 최대 파일 크기 (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// 파일 저장 경로 설정
const getUploadDir = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/tmp/uploads';
  }
  return path.join(process.cwd(), "public/uploads");
};

export async function PATCH(request: Request) {
    try {
        const formData = await request.formData();

        const id = formData.get("id")?.toString();
        const text = formData.get("text")?.toString() || "";
        const date = formData.get("date")?.toString() || "";
        const post_text = formData.get("post_text")?.toString() || "";
        const existingFilesJson = formData.get("existingFiles")?.toString() || "[]";
        const files = formData.getAll("files") as File[];

        if (!id) {
            return NextResponse.json(
                { message: "공지사항 ID가 필요합니다." },
                { status: 400 }
            );
        }

        // 파일 유효성 검사
        for (const file of files) {
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                return NextResponse.json(
                    { message: `지원하지 않는 파일 형식입니다: ${file.name}` },
                    { status: 400 }
                );
            }
            if (file.size > MAX_FILE_SIZE) {
                return NextResponse.json(
                    { message: `파일 크기가 너무 큽니다 (최대 10MB): ${file.name}` },
                    { status: 400 }
                );
            }
        }

        // 기존 공지사항을 찾아서 업데이트합니다.
        const existingNotice = await prisma.notice.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!existingNotice) {
            return NextResponse.json(
                { message: "공지사항을 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        // 기존 파일 목록 파싱
        let existingFiles: string[] = [];
        try {
            existingFiles = JSON.parse(existingFilesJson);
        } catch (error) {
            console.error("기존 파일 목록 파싱 오류:", error);
            existingFiles = [];
        }

        // 삭제된 파일 처리
        const oldFiles = existingNotice.file ? JSON.parse(existingNotice.file) : [];
        const deletedFiles = oldFiles.filter((file: string) => !existingFiles.includes(file));
        
        // 삭제된 파일들을 서버에서도 삭제
        for (const fileUrl of deletedFiles) {
            try {
                const fileName = fileUrl.split("/").pop();
                if (fileName) {
                    const uploadDir = getUploadDir();
                    const filePath = path.join(uploadDir, fileName);
                    if (existsSync(filePath)) {
                        await unlink(filePath);
                        console.log(`파일 삭제 완료: ${filePath}`);
                    }
                }
            } catch (error) {
                console.error("파일 삭제 오류:", error);
            }
        }

        // 새 파일 업로드
        const uploadDir = getUploadDir();
        try {
            if (!existsSync(uploadDir)) {
                await mkdir(uploadDir, { recursive: true });
            }
        } catch (error) {
            console.error("업로드 디렉토리 생성 오류:", error);
            return NextResponse.json(
                { message: "업로드 디렉토리 생성 실패" },
                { status: 500 }
            );
        }

        const newFiles: string[] = [];
        const uploadErrors: string[] = [];
        const createdFilePaths: string[] = []; // 롤백을 위한 파일 경로 추적

        for (const file of files) {
            try {
                if (!file || file.size === 0) {
                    uploadErrors.push(`${file?.name || '알 수 없는 파일'}: 빈 파일입니다.`);
                    continue;
                }

                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                
                // 파일명을 더 안전하게 처리 (한글 및 특수문자 처리 개선)
                const originalName = file.name;
                
                // 파일 확장자 추출
                const lastDotIndex = originalName.lastIndexOf('.');
                const name = lastDotIndex > 0 ? originalName.substring(0, lastDotIndex) : originalName;
                const extension = lastDotIndex > 0 ? originalName.substring(lastDotIndex) : '';
                
                // 한글과 특수문자를 안전하게 처리
                const safeName = name
                  .replace(/[<>:"/\\|?*\x00-\x1F]/g, '_')  // 시스템 예약 문자 제거
                  .replace(/\s+/g, '_')  // 공백을 언더스코어로 변경
                  .substring(0, 100);  // 파일명 길이 제한
                
                const timestamp = Date.now();
                const fileName = `${timestamp}_${safeName}${extension}`;
                const filePath = path.join(uploadDir, fileName);
                
                console.log(`파일 저장 시도: ${filePath}`);
                console.log(`원본 파일명: ${originalName}`);
                console.log(`변환된 파일명: ${fileName}`);
                
                // 파일 저장
                await writeFile(filePath, buffer);
                
                // 파일이 실제로 저장되었는지 확인
                if (!existsSync(filePath)) {
                    throw new Error("파일 저장 후 존재하지 않음");
                }
                
                // 저장된 파일 크기 확인
                const { stat } = await import('fs/promises');
                const stats = await stat(filePath);
                if (stats.size !== buffer.length) {
                    throw new Error(`파일 크기 불일치: 예상 ${buffer.length}, 실제 ${stats.size}`);
                }
                
                console.log(`파일 저장 성공: ${filePath} (크기: ${stats.size} bytes)`);
                
                // 저장된 파일 경로 추적 (롤백용)
                createdFilePaths.push(filePath);
                
                newFiles.push(`/api/uploads/${fileName}`);
            } catch (error) {
                console.error(`파일 ${file.name} 업로드 실패:`, error);
                uploadErrors.push(`${file.name}: ${error instanceof Error ? error.message : String(error)}`);
            }
        }

        // 최종 파일 목록 구성 (기존 파일 + 새 파일)
        const finalFiles = [...existingFiles, ...newFiles];

        try {
            // DB 업데이트 (트랜잭션 처리)
            const updatedNotice = await prisma.notice.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title: text,
                    content: post_text,
                    date: date,
                    file: JSON.stringify(finalFiles),
                },
            });

            console.log(`공지사항 업데이트 성공: ID ${updatedNotice.id}, 파일 수: ${finalFiles.length}`);

            // 업로드 에러가 있으면 경고와 함께 응답
            if (uploadErrors.length > 0) {
                return NextResponse.json({
                    ...updatedNotice,
                    warning: "일부 파일 업로드 실패",
                    errors: uploadErrors,
                    successCount: newFiles.length,
                    failureCount: uploadErrors.length,
                    totalFiles: finalFiles.length
                });
            }

            return NextResponse.json({
                ...updatedNotice,
                successCount: newFiles.length,
                totalFiles: finalFiles.length
            });
            
        } catch (dbError) {
            console.error("DB 업데이트 실패, 새 파일 롤백 시작:", dbError);
            
            // DB 업데이트 실패 시 새로 저장된 파일들만 삭제 (롤백)
            for (const filePath of createdFilePaths) {
                try {
                    if (existsSync(filePath)) {
                        await unlink(filePath);
                        console.log(`롤백: 파일 삭제 완료 ${filePath}`);
                    }
                } catch (cleanupError) {
                    console.error(`롤백 실패: ${filePath}`, cleanupError);
                }
            }
            
            return NextResponse.json(
                { 
                    message: "공지사항 수정 실패", 
                    error: dbError instanceof Error ? dbError.message : String(dbError),
                    rollbackCompleted: true
                },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error updating notice:", error);
        return NextResponse.json(
            { message: "공지사항 수정 중 오류가 발생했습니다.", error: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
