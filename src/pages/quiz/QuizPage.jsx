import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import QuestionFrame from "./QuestionFrame";
import QuestionNavigationPanel from "./QuestionNavigationPanel";
import { useParams } from "react-router";
import ImportContent from "../../chapterImportService.js";
import ModuleData from "../../../public/data/modules.json"
import MobileNavbar from "../../components/MobileNavbar.jsx";
import MobileSidebar from "../../components/MobileSidebar.jsx";

const QuizPage = () => {
  const newObject = useMemo(() => {
    return {};
  }, []);

  const [quiz, setQuiz] = useState([]);
  const [moduleName, setModuleName] = useState("");
  const [topics, setTopics] = useState(null);
  const [selected, setSelected] = useState(newObject);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { chapter } = useParams();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    (async () => {
      const quizData = await ImportContent({ chapter: chapter, type: "quiz" }); 
      const importedTopic = await ImportContent({ chapter: chapter, type: "topics" });
      const moduleData = ModuleData;
      for (let i = 0; i < quizData.data.length; i++) {
        newObject[i] = -1;
      }
      await getModuleName(moduleData.data);
      setTopics(importedTopic);
      setQuiz(quizData.data);
    })();
  }, [quiz, chapter, newObject, topics]);

  const getModuleName = async (module) => {
    for (let i = 0; i < module.length; i++) {
      if (module[i].link === chapter) {
        setModuleName(module[i].name);
        break;
      }
    }
  };

  if (quiz.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Navbar title={moduleName} />
      <MobileNavbar title={moduleName} toggle={toggleSidebar} />

      <div className="flex flex-row content-height">
        <QuestionNavigationPanel quiz={quiz} selected={selected} />
        <MobileSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} subtopics={topics.subtopics} />

        <div className="w-full content-height px-6 overflow-y-scroll">
          <p className="font-bold text-[62px] mb-7">Quiz</p>
          {quiz.map((question, idx) => {
            return (
              <QuestionFrame
                question={question}
                setSelected={setSelected}
                idx={idx}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;