// sidebar for smaller devices
import PropTypes from 'prop-types';
const Sidebar1 = ({ isOpen, onClose,topic,subtopics}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#ADBDC8] text-white pl-6 transition-transform ease-in-out duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar content goes here */}
      <button className="p-4 " onClick={onClose}>
        Close Sidebar
      </button>
      <p className="text-left pt-5 text-xl pb-4 font-medium text-black">{topic}</p>
      {subtopics.map((e,idx)=>{
        return(
          // <Link to="/" key="1"><p className="text-left text-xl pb-2">{e}</p></Link>
          <p className="text-left text-md pb-2 text-black" key={idx}>{e}</p>
        )
      })}
    </div>
  );
};
Sidebar1.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar1;
