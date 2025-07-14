import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import prisma from "@/app/libs/prisma";
import { existsSync } from "fs";

// 허용된 파일 타입 정의 (이미지 형식 확장)
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

// 파일 저장 경로 설정 (개선된 버전)
const getUploadDir = () => {
  // 배포 환경에서는 지속적인 스토리지 사용 (임시 폴더 대신)
  if (process.env.NODE_ENV === 'production') {
    // /tmp 대신 지속적인 경로 사용 (환경변수로 설정 가능)
    return process.env.UPLOAD_DIR || path.join(process.cwd(), "public/uploads");
  }
  // 개발 환경에서는 public/uploads 사용
  return path.join(process.cwd(), "public/uploads");
};

// 로깅 강화 함수
const logUploadStep = (step: string, data: any) => {
  const timestamp = new Date().toISOString();
  console.log(`[UPLOAD] ${timestamp} - ${step}:`, data);
};

export async function POST(req: Request) {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  try {
    logUploadStep('REQUEST_START', { requestId, timestamp: new Date().toISOString() });
    
    // FormData 파싱
    const formData = await req.formData();

    // 텍스트 필드 추출
    const text = formData.get("text")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const post_text = formData.get("post_text")?.toString() || "";

    logUploadStep('FORM_DATA_PARSED', { 
      requestId, 
      title: text, 
      dateField: date,
      contentLength: post_text.length 
    });

    // 다중 파일 추출 (input name="files")
    const files = formData.getAll("files") as File[];
    
    logUploadStep('FILES_EXTRACTED', { 
      requestId, 
      fileCount: files.length,
      fileNames: files.map(f => f.name),
      fileSizes: files.map(f => f.size)
    });

    // 파일 유효성 검사
    for (const file of files) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        logUploadStep('VALIDATION_ERROR', { requestId, error: 'unsupported_type', fileName: file.name, fileType: file.type });
        return NextResponse.json(
          { message: `지원하지 않는 파일 형식입니다: ${file.name}` },
          { status: 400 }
        );
      }
      if (file.size > MAX_FILE_SIZE) {
        logUploadStep('VALIDATION_ERROR', { requestId, error: 'size_too_large', fileName: file.name, fileSize: file.size });
        return NextResponse.json(
          { message: `파일 크기가 너무 큽니다 (최대 10MB): ${file.name}` },
          { status: 400 }
        );
      }
    }

    // 업로드 폴더 준비
    const uploadDir = getUploadDir();
    logUploadStep('UPLOAD_DIR_CHECK', { requestId, uploadDir, exists: existsSync(uploadDir) });
    
    try {
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
        logUploadStep('UPLOAD_DIR_CREATED', { requestId, uploadDir });
      }
    } catch (error) {
      logUploadStep('UPLOAD_DIR_ERROR', { requestId, error: error instanceof Error ? error.message : String(error) });
      console.error("업로드 디렉토리 생성 오류:", error);
      return NextResponse.json(
        { message: "업로드 디렉토리 생성 실패", error: error instanceof Error ? error.message : String(error) },
        { status: 500 }
      );
    }

    // 각 파일 저장 후 브라우저 접근 경로 배열 구성
    const savedFiles: string[] = [];
    const uploadErrors: string[] = [];
    const createdFilePaths: string[] = []; // 롤백을 위한 파일 경로 추적
    const fileData: Array<{
      file: File;
      buffer: Buffer;
      fileName: string;
      filePath: string;
      fileUrl: string;
      fileProcessId: string;
    }> = [];

    // PHASE 1: 모든 파일의 버퍼 생성 및 경로 준비 (실제 저장 전)
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileProcessId = `${requestId}_file_${i}`;
      
      try {
        logUploadStep('FILE_PREPARE_START', { fileProcessId, fileName: file.name, fileSize: file.size });
        
        if (!file || file.size === 0) {
          logUploadStep('FILE_PREPARE_ERROR', { fileProcessId, error: 'empty_file' });
          uploadErrors.push(`${file?.name || '알 수 없는 파일'}: 빈 파일입니다.`);
          continue;
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        logUploadStep('FILE_BUFFER_CREATED', { fileProcessId, bufferSize: buffer.length });
        
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
        
        const timestamp = Date.now() + i; // 동일 시간에 업로드되는 파일들 구분을 위해 인덱스 추가
        const fileName = `${timestamp}_${safeName}${extension}`;
        const filePath = path.join(uploadDir, fileName);
        const fileUrl = `/api/uploads/${fileName}`;
        
        // 파일명 중복 확인
        if (existsSync(filePath)) {
          const newTimestamp = Date.now() + Math.random() * 1000;
          const newFileName = `${Math.floor(newTimestamp)}_${safeName}${extension}`;
          const newFilePath = path.join(uploadDir, newFileName);
          const newFileUrl = `/api/uploads/${newFileName}`;
          
          logUploadStep('FILE_NAME_CONFLICT_RESOLVED', { 
            fileProcessId, 
            originalPath: filePath, 
            newPath: newFilePath 
          });
          
          fileData.push({
            file,
            buffer,
            fileName: newFileName,
            filePath: newFilePath,
            fileUrl: newFileUrl,
            fileProcessId
          });
        } else {
          fileData.push({
            file,
            buffer,
            fileName,
            filePath,
            fileUrl,
            fileProcessId
          });
        }
        
        logUploadStep('FILE_PREPARE_SUCCESS', { 
          fileProcessId, 
          originalName, 
          safeName, 
          fileName: fileData[fileData.length - 1].fileName, 
          filePath: fileData[fileData.length - 1].filePath 
        });
        
      } catch (error) {
        logUploadStep('FILE_PREPARE_ERROR', { 
          fileProcessId, 
          error: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined
        });
        uploadErrors.push(`${file.name}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    logUploadStep('FILE_PREPARATION_COMPLETE', { 
      requestId, 
      preparedCount: fileData.length, 
      errorCount: uploadErrors.length 
    });

    // 준비된 파일이 하나도 없는 경우
    if (fileData.length === 0 && files.length > 0) {
      logUploadStep('NO_FILES_PREPARED', { requestId });
      return NextResponse.json(
        { message: "모든 파일 준비 실패", errors: uploadErrors },
        { status: 500 }
      );
    }

    // PHASE 2: 모든 파일을 실제로 저장 (원자성 보장)
    try {
      logUploadStep('FILE_SAVING_START', { requestId, fileCount: fileData.length });
      
      // 업로드 디렉토리 재확인
      if (!existsSync(uploadDir)) {
        throw new Error(`업로드 디렉토리가 존재하지 않음: ${uploadDir}`);
      }

      // 모든 파일을 순차적으로 저장
      for (const data of fileData) {
        const { buffer, filePath, fileProcessId } = data;
        
        logUploadStep('FILE_WRITING_START', { fileProcessId, filePath });
        
        // 파일 저장
        await writeFile(filePath, buffer);
        
        // 파일이 실제로 저장되었는지 확인
        if (!existsSync(filePath)) {
          throw new Error(`파일 저장 실패: ${filePath}`);
        }
        
        // 저장된 파일 크기 확인
        const stats = await import('fs/promises').then(fs => fs.stat(filePath));
        if (stats.size !== buffer.length) {
          throw new Error(`파일 크기 불일치: 예상 ${buffer.length}, 실제 ${stats.size}`);
        }
        
        // 성공적으로 저장된 파일 추적
        createdFilePaths.push(filePath);
        savedFiles.push(data.fileUrl);
        
        logUploadStep('FILE_SAVED_SUCCESS', { 
          fileProcessId, 
          filePath, 
          expectedSize: buffer.length, 
          actualSize: stats.size 
        });
      }

      logUploadStep('ALL_FILES_SAVED', { 
        requestId, 
        savedCount: savedFiles.length,
        savedFiles
      });

    } catch (saveError) {
      logUploadStep('FILE_SAVING_ERROR', { 
        requestId, 
        error: saveError instanceof Error ? saveError.message : String(saveError),
        stack: saveError instanceof Error ? saveError.stack : undefined,
        savedCount: createdFilePaths.length
      });

      // 저장 중 실패 시 이미 저장된 파일들 모두 롤백
      for (const filePath of createdFilePaths) {
        try {
          if (existsSync(filePath)) {
            await import('fs/promises').then(fs => fs.unlink(filePath));
            logUploadStep('ROLLBACK_FILE_DELETED', { requestId, filePath });
          }
        } catch (cleanupError) {
          logUploadStep('ROLLBACK_ERROR', { requestId, filePath, error: cleanupError });
        }
      }

      return NextResponse.json(
        { 
          message: "파일 저장 중 오류 발생", 
          error: saveError instanceof Error ? saveError.message : String(saveError),
          rollbackCompleted: true 
        },
        { status: 500 }
      );
    }

    logUploadStep('DB_SAVE_START', { requestId, title: text, fileCount: savedFiles.length });

    try {
      // DB에 저장 (파일 배열을 JSON 문자열로 저장) - 트랜잭션 처리
      const result = await prisma.notice.create({
        data: {
          title: text,
          content: post_text,
          date: date,
          file: JSON.stringify(savedFiles),
        },
      });

      logUploadStep('DB_SAVE_SUCCESS', { 
        requestId, 
        noticeId: result.id, 
        fileCount: savedFiles.length 
      });

      // 일부 파일만 업로드 성공한 경우 경고 메시지 포함
      if (uploadErrors.length > 0) {
        logUploadStep('PARTIAL_SUCCESS', { 
          requestId, 
          noticeId: result.id, 
          successCount: savedFiles.length, 
          errorCount: uploadErrors.length 
        });
        
        return NextResponse.json({
          ...result,
          warning: "일부 파일 업로드 실패",
          errors: uploadErrors,
          successCount: savedFiles.length,
          failureCount: uploadErrors.length
        });
      }

      logUploadStep('COMPLETE_SUCCESS', { 
        requestId, 
        noticeId: result.id, 
        fileCount: savedFiles.length 
      });

      return NextResponse.json({
        ...result,
        successCount: savedFiles.length
      });
      
    } catch (dbError) {
      logUploadStep('DB_SAVE_ERROR', { 
        requestId, 
        error: dbError instanceof Error ? dbError.message : String(dbError),
        stack: dbError instanceof Error ? dbError.stack : undefined
      });
      
      console.error("DB 저장 실패, 파일 롤백 시작:", dbError);
      
      // DB 저장 실패 시 저장된 파일들 삭제 (롤백)
      for (const filePath of createdFilePaths) {
        try {
          if (existsSync(filePath)) {
            await import('fs/promises').then(fs => fs.unlink(filePath));
            logUploadStep('ROLLBACK_FILE_DELETED', { requestId, filePath });
          }
        } catch (cleanupError) {
          logUploadStep('ROLLBACK_ERROR', { requestId, filePath, error: cleanupError });
          console.error(`롤백 실패: ${filePath}`, cleanupError);
        }
      }
      
      return NextResponse.json(
        { 
          message: "공지사항 저장 실패", 
          error: dbError instanceof Error ? dbError.message : String(dbError),
          rollbackCompleted: true
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    logUploadStep('REQUEST_ERROR', { 
      requestId, 
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    
    console.error("파일 업로드 오류:", error);
    return NextResponse.json(
      { message: "업로드 실패", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
