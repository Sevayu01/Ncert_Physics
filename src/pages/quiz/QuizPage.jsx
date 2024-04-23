import { useEffect, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import QuestionFrame from "./QuestionFrame";
import QuestionNavigationPanel from "./QuestionNavigationPanel";
import { useParams } from "react-router";

const QuizPage = () => {
  const newObject = useMemo(() => {
    return {};
  }, []);

  const [quiz, setQuiz] = useState([]);
  const [moduleName, setModuleName] = useState("");
  const [selected, setSelected] = useState(newObject);
  const { chapter } = useParams();

  useEffect(() => {
    (async () => {
      const quizImportPath = `../../../public/data/quiz/${chapter}-quiz.json`;
      const moduleImportPath = `../../../public/data/modules.json`;
      const quizData = await import(/* @vite-ignore */ quizImportPath);
      const moduleData = await import(/* @vite-ignore */ moduleImportPath);
      for (let i = 0; i < quizData.data.length; i++) {
        newObject[i] = -1;
      }
      await getModuleName(moduleData.data);
      setQuiz(quizData.data);
    })();
  }, [quiz, chapter, newObject]);

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
      <div className="flex flex-row content-height">
        <QuestionNavigationPanel quiz={quiz} selected={selected} />

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
