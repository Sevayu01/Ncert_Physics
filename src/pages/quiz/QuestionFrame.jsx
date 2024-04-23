import { useEffect, useState } from "react";
import Choice from "./Choice";
import PropTypes from "prop-types";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const QuestionFrame = ({ question, idx, setSelected }) => {
  const { statement, options, answer } = question;
  const [clickedChoice, setClickedChoice] = useState(-1);

  useEffect(() => {
    if (clickedChoice === -1) return;
    if (clickedChoice === answer) {
      setSelected((prev) => ({ ...prev, [idx]: 1 }));
    } else {
      setSelected((prev) => ({ ...prev, [idx]: 0 }));
    }
  }, [clickedChoice, answer, idx, setSelected]);

  return (
    <div className="ml-3 mb-10">
      <p className="text-[20px] mb-1 font-light libre">Question {idx + 1}.</p>
      <p className="text-[22px] lg:w-[60rem] mb-5 font-bold relative">
        <Latex>{statement}</Latex>
      </p>
      {options.map((choice, choiceIdx) => {
        return (
          <Choice
            choice={choice}
            answer={answer}
            clickedChoice={clickedChoice}
            setClickedChoice={setClickedChoice}
            idx={choiceIdx}
            key={choiceIdx}
          />
        );
      })}
    </div>
  );
};

QuestionFrame.propTypes = {
  question: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default QuestionFrame;
