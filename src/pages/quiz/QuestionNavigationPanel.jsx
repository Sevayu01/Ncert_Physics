import QuickNavigationButton from "./QuickNavigationButton";

const QuestionNavigationPanel = ({ questions, selected }) => {

  let selectedArray = Object.values(selected);
  let score = selectedArray.reduce((count, number) => {
    return number === 1 ? count + 1 : count;
  }, 0);

  return (
    <div className=" bg-[#ADBDC8] w-[500px] h-full pt-24 sm:block hidden">
      <div className="w-10/12 mx-auto p-5 grid grid-cols-3 gap-y-5">
        {questions.map((question, idx) => {
          return <QuickNavigationButton idx={idx} selected={selected} key={idx} />;
        })}
      </div>
      <div className="w-9/12 mx-auto mt-5 text-xl">
        Your Score: <span className="font-bold">{score} out of {selectedArray.length}</span>
      </div>
    </div>
  );
};

export default QuestionNavigationPanel;
