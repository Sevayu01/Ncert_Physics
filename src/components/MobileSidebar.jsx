import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const MobileSidebar = ({ isOpen, toggle, topic, subtopics }) => {
  const { chapter } = useParams();

  return (
    <div
      className={`fixed z-10 left-0 right-0 h-full bg-[#333539] text-white  pl-6 transition-transform ease-in-out duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mt-12">
        {subtopics.map((e, idx) => {
          return (
            <Link to={`/${chapter}/${e.link}`} key={idx} onClick={toggle}>
              <p className="text-left text-xl pb-4 px-2">{e.name}</p>
            </Link>
          );
        })}
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
