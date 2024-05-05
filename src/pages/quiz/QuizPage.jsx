import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import QuestionFrame from "./QuestionFrame";
import QuestionNavigationPanel from "./QuestionNavigationPanel";
import { useParams } from "react-router";
import ImportContent from "../../chapterImportService.js";
import ModuleData from "../../../public/data/modules.json";
import MobileNavbar from "../../components/MobileNavbar.jsx";
import MobileSidebar from "../../components/MobileSidebar.jsx";
import { addScore, fetchScoreList, updateScore } from "../../db.js";

const QuizPage = () => {
  const newObject = {};

  const [quiz, setQuiz] = useState([]);
  const [moduleName, setModuleName] = useState("");
  const [topics, setTopics] = useState(null);
  const [selected, setSelected] = useState(newObject);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentScore, setCurrentScore] = useState(null);
  const { chapter } = useParams();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    (async () => {
      const scoreList = await fetchScoreList();
      let flag = false;
      for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i].name === chapter) {
          setCurrentScore(scoreList[i].score);
          flag = true;
          break;
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const quizData = await ImportContent({ chapter: chapter, type: "quiz" });
      const importedTopic = await ImportContent({
        chapter: chapter,
        type: "topics",
      });
      const moduleData = ModuleData;
      for (let i = 0; i < quizData.data.length; i++) {
        newObject[i] = -1;
      }
      await getModuleName(moduleData.data);
      setTopics(importedTopic);
      setQuiz(quizData.data);
    })();
  }, [quiz, chapter, newObject, topics]);

  const submitQuizHandler = async () => {
    const scores = Object.values(selected);
    if (scores.includes(-1)) {
      window.alert("Please answer all questions before submitting");
      return;
    }

    let percentScore = 0;
    scores.forEach((score) => {
      if (score === 1) {
        percentScore++;
      }
    });
    if (scores.length > 0) {
      percentScore = (percentScore / scores.length) * 100;
      percentScore = Math.round(percentScore * 100) / 100;
    } else {
      percentScore = 0;
    }
    const scoreList = await fetchScoreList();
    let flag = false;
    for (let i = 0; i < scoreList.length; i++) {
      if (scoreList[i].name === chapter) {
        flag = true;
        updateScore(chapter, percentScore);
        window.alert(
          `You new score is ${percentScore}%. You can take the quiz again anytime to improve your score.`
        );
        break;
      }
    }
    if (!flag) {
      addScore(chapter, percentScore);
      window.alert(
        `You scored ${percentScore}%. You can take the quiz again anytime to improve your score.`
      );
    }
    window.location.reload();
  };

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
        <MobileSidebar
          isOpen={isSidebarOpen}
          toggle={toggleSidebar}
          subtopics={topics.subtopics}
        />

        <div className="w-full content-height px-6 overflow-y-scroll">
          <p className="font-bold text-[62px]">Quiz</p>
          <p className="text-yellow-700">
            Score at least 70% to mark a module as completed.
          </p>
          <p className="mb-7 text-yellow-700">
            Your last score is: {currentScore === null ? 0 : currentScore}%
          </p>
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
          <button
            onClick={submitQuizHandler}
            className="text-xl pb-2 mb-6 bg-[#556672] hover:bg-[#3c4851] w-[8rem] text-center rounded-md items-center py-2 text-white font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
