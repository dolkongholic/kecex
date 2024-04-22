import Header from "@/components/Header";
import ResumeClient from "./ResumeClient";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/action/getCurrentUser";
import getResume from "@/app/action/getResume"
// import { getShebang } from "typescript";
import getSchool from "@/app/action/getSchool";
import getCareer from "@/app/action/getCareer";
import getTrn from "@/app/action/getTrn";
import getLicense from "@/app/action/getLicense";

const ResumePage = async () => {
  // const [menu, setMenu] = useState<string | null>(null);
  const currentUser = await getCurrentUser();

  let currentResume:any = null

  if (currentUser) {
    currentResume = await getResume(currentUser);
  }
  // const resumeId = currentResume.id
  // console.log(currentResume)
  let schoolList:any = null;
  let careerList:any = null;
  let trainingList:any = null;
  let licenseList:any = null;
  if (currentResume) {
    schoolList = await getSchool({ resumeId: currentResume.id });
    careerList = await getCareer({ resumeId: currentResume.id });
    trainingList = await getTrn({ resumeId: currentResume.id });
    licenseList = await getLicense({ resumeId: currentResume.id });
  }


  return (
    <div>
      <Header currentUser={currentUser} />
      <ResumeClient 
      currentUser={currentUser}
      currentResume={currentResume}
      schoolList={schoolList}
      careerList={careerList}
      trainingList={trainingList}
      licenseList={licenseList}
      />
      <Footer />
    </div>
  );
};

export default ResumePage;
