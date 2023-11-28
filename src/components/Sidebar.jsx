// sidebar component for larger devices
import {Link} from "react-router-dom";

const Sidebar = ({topic,subtopics}) => {
  return (  
    <div className="bg-[#ADBDC8] w-full  h-full lg:block hidden pl-14 transform duration-300 ease-in-out">
        <p className="text-left pt-5 text-3xl pb-4 font-medium">{topic}</p>
        {subtopics.map((e,idx)=>{
          return(
            <Link to={e.link} key={idx}><p className="text-left text-xl pb-2">{e.name}</p></Link>
           // <p className="text-left text-xl pb-2" key={idx}>{e}</p>
          )
        })}
        <Link to="/quiz" key={8}><p className="text-left text-xl pb-2">Quiz</p></Link>
    </div>
  );
};

export default Sidebar;
