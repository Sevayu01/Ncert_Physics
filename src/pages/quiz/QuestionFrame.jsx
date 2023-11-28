import { useEffect, useState } from "react";
import Choice from "./Choice";

const QuestionFrame = ({ question, idx, setSelected }) => {
  const { statement, options, answer } = question;
  const [clickedChoice, setClickedChoice] = useState(-1);

  return (
    <div className="ml-3 mb-10">
      <p className="text-[20px] mb-1 font-light libre">Question {idx + 1}.</p>
      <p className="text-[22px] lg:w-[60rem] mb-5 font-bold">{statement}</p>
      {options.map((choice, choiceIdx) => {
        return (
          <Choice
            choice={choice}
            answer={answer}
            clickedChoice={clickedChoice}
            setClickedChoice={setClickedChoice}
            setSelected={setSelected}
            questionIdx={idx}
            idx={choiceIdx}
            key={choiceIdx}
          />
        );
      })}
    </div>
  );
};

export default QuestionFrame;
