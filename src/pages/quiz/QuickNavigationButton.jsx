const QuickNavigationButton = ({ idx, selected }) => {

    const defaultStyle = "w-16 h-16 rounded-full bg-white text-center text-xl flex justify-center items-center";
    const correctStyle = "w-16 h-16 rounded-full bg-[#2caf00] text-center text-xl flex justify-center items-center";
    const incorrectStyle = "w-16 h-16 rounded-full bg-[#a42929] text-center text-xl flex justify-center items-center";

    const getStyle = () => {
        if (selected[idx] === -1) return defaultStyle;
        if (selected[idx] === 1) return correctStyle;
        if (selected[idx] === 0) return incorrectStyle; 
    }

  return (
    <div className={getStyle()}>
      {idx+1}
    </div>
  );
};

export default QuickNavigationButton;
