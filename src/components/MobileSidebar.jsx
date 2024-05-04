import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const MobileSidebar = ({ isOpen, toggle, subtopics }) => {
  const { chapter } = useParams();

  return (
    <div
      className={`absolute z-10 left-0 right-0 h-full bg-[#333539] text-white  px-6 transition-transform ease-in-out duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mt-12">
        {subtopics.map((e, idx) => {
          return (
            <Link to={`/${chapter}/${e.link}`} key={idx} onClick={toggle}>
              <p className="text-left text-xl pb-4">{e.name}</p>
            </Link>
          );
        })}
        <Link to={`/${chapter}/quiz`} key={8} onClick={toggle}>
          <button className="text-xl pb-2 bg-[#556672] hover:bg-[#3c4851] w-full text-center rounded-md items-center py-2 text-white font-medium">
            Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

MobileSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
  subtopics: PropTypes.array.isRequired,
};

export default MobileSidebar;