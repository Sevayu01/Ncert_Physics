import { useState } from "react";
import Navbar from "../../components/Navbar";
import QuestionFrame from "./QuestionFrame";
import QuestionNavigationPanel from "./QuestionNavigationPanel";
import dummyQuestions from "../../data/dummyQuiz.json";

const QuizPage = () => {
  const { data } = dummyQuestions;
  const [questions] = useState(data);
  const newObject = {};
  for (let i = 0; i < questions.length; i++) {
    newObject[i] = -1;
  }
  const [selected, setSelected] = useState(newObject);
  console.log(selected);

  return (
    <div>
      <Navbar title={"ELECTRICITY AND MAGNETISM"} />
      <div className="flex flex-row content-height">
        <QuestionNavigationPanel questions={questions} selected={selected} />

        {/* Questions will be shown in this div */}
        <div className="w-full content-height px-6 overflow-y-scroll">
          <p className="font-bold text-[62px] mb-7">Quiz</p>
          {questions.map((question, idx) => {
            return <QuestionFrame question={question} setSelected={setSelected} idx={idx} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
