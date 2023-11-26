const Choice = ({ choice, answer, idx }) => {
  const defaultStyle =
    "bg-[#F4F4F4] hover:bg-[#f0f0f0] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";
  const correctStyle =
    "bg-[#EFFFE7] border-[1px] border-[#82BF6D] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";
  const incorrectStyle =
    "bg-[#FFE5E5] border-[1px] border-[#DF9595] lg:w-[60rem] my-2 py-3 px-4 rounded-md text-[18px] font-light";

  return (
    <div className={idx === answer ? correctStyle : defaultStyle}>
      <span className="text-[#ACACAC] mr-2">{idx + 1}.</span>
      {choice}
    </div>
  );
};

export default Choice;
