const QuickNavigationButton = ({ idx, selected }) => {
  const defaultStyle =
    "w-16 h-16 rounded-full border-[5px] border-white bg-white text-center text-xl flex justify-center items-center";
  const correctStyle =
    "w-16 h-16 rounded-full border-[5px] hover:border-[2px] transition-all ease-in-out border-white bg-green-500 text-white font-bold text-center text-xl flex justify-center items-center";
  const incorrectStyle =
    "w-16 h-16 rounded-full border-[5px] hover:border-[2px] transition-all ease-in-out border-white bg-red-500 text-white font-bold text-center text-xl flex justify-center items-center";

  const getStyle = () => {
    if (selected[idx] === -1) return defaultStyle;
    if (selected[idx] === 1) return correctStyle;
    if (selected[idx] === 0) return incorrectStyle;
  };

  return <div className={getStyle()}>{idx + 1}</div>;
};

export default QuickNavigationButton;
