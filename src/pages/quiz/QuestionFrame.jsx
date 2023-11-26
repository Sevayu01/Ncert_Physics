import Choice from "./Choice";

const QuestionFrame = ({ question, idx }) => {
  const { statement, options, answer } = question;
  return (
    <div className="ml-3 mb-10">
      <p className="text-[20px] mb-1 font-light libre">Question {idx + 1}.</p>
      <p className="text-[22px] lg:w-[60rem] mb-5 font-bold">{statement}</p>
      {options.map((choice, idx) => {
        return <Choice choice={choice} answer={answer} idx={idx} key={idx} />;
      })}
    </div>
  );
};

export default QuestionFrame;
