import QuickNavigationButton from "./QuickNavigationButton";

const QuestionNavigationPanel = ({ questions, selected }) => {
  return (
    <div className=" bg-[#ADBDC8] w-[500px] h-full pt-24 sm:block hidden">
      <div className="w-10/12 mx-auto p-5 grid grid-cols-3 gap-y-5">
        {questions.map((question, idx) => {
          return <QuickNavigationButton idx={idx} selected={selected} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default QuestionNavigationPanel;
