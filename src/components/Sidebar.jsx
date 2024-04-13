import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const Sidebar = ({ topic, subtopics }) => {
  const { chapter, topic: currentTopic } = useParams();

  return (
    <div className="bg-[#ADBDC8] w-[320px] h-full pt-8 sm:block hidden pl-8 pr-4">
      <p className="text-left text-xl pb-4 font-black">{topic}</p>
      {subtopics.map((e, idx) => {
        return (
          <Link to={`/${chapter}/${e.link}`} key={idx}>
            <p
              className={`text-left text-[15px] pb-3 hover:text-blue-800 leading-5 ${
                e.link === currentTopic ? "text-blue-800" : ""
              }`}
            >
              {e.name}
            </p>
          </Link>
        );
      })}
      <Link to={`/${chapter}/quiz`} key={8}>
        <p className="text-xl pb-2 bg-[#556672] hover:bg-[#3c4851] w-[80%] text-center rounded-md items-center py-2 text-white font-medium">
          Quiz
        </p>
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  topic: PropTypes.string.isRequired,
  subtopics: PropTypes.array.isRequired,
};

export default Sidebar;
