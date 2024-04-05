// sidebar component for larger devices
import { Link, useParams } from "react-router-dom";

const Sidebar = ({ topic, subtopics }) => {
  const { chapter } = useParams();

  return (
    <div className="bg-[#ADBDC8] w-[300px] h-full pt-24 sm:block hidden pl-8">
      <p className="text-left pt-5 text-3xl pb-4 font-medium">{topic}</p>
      {subtopics.map((e, idx) => {
        return (
          <Link to={`/${chapter}/${e.link}`} key={idx}>
            <p className="text-left text-xl pb-2">{e.name}</p>
          </Link>
        );
      })}
      <Link to={`/${chapter}/quiz`} key={8}>
        <p className="text-left text-xl pb-2">Quiz</p>
      </Link>
    </div>
  );
};

export default Sidebar;
