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
  const [selected, setSelected] = useState(newObject);
  const { chapter } = useParams();

  useEffect(() => {
    (async () => {
      const quizImportPath = `../../data/quiz/${chapter}-quiz.json`;
      const quizData = await import(quizImportPath);
      for (let i = 0; i < quizData.data.length; i++) {
        newObject[i] = -1;
      }
      setQuiz(quizData.data);
    })();
  }, [quiz, chapter, newObject]);

  if (quiz.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar title={"ELECTRICITY AND MAGNETISM"} />
      <div className="flex flex-row content-height">
        <QuestionNavigationPanel quiz={quiz} selected={selected} />

        {/* Questions will be shown in this div */}
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
