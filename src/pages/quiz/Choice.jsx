import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

const Choice = ({ choice, answer, idx, clickedChoice, setClickedChoice }) => {
  const defaultStyle =
    "bg-[#F4F4F4] hover:bg-[#f0f0f0] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light cursor-pointer";
  const correctStyle =
    "bg-[#EFFFE7] border-[1px] border-[#82BF6D] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";
  const incorrectStyle =
    "bg-[#FFE5E5] border-[1px] border-[#DF9595] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";
  const selectedStyle =
    "bg-[#F4F4F4] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";

  const clickHandler = () => {
    setClickedChoice((prev) => idx);
  };

  const styleSelector = () => {
    if (clickedChoice === -1) {
      return defaultStyle;
    }
    if (answer === idx) {
      return correctStyle;
    }
    if (clickedChoice === idx) {
      return incorrectStyle;
    }
    return selectedStyle;
  };

  return (
    <div
      className={styleSelector()}
      onClick={clickedChoice === -1 ? clickHandler : () => {}}
    >
      <span className="text-[#ACACAC] mr-2">{idx + 1}.</span>
      <span className="relative">
        <Latex>{choice}</Latex>
      </span>
    </div>
  );
};

export default Choice;
