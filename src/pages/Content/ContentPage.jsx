import {useState} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Topics from "../../data/Chapter1.json";
import Sidebar1 from "../../components/Sidebar1";
import { Outlet } from "react-router-dom";
const ContentPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Navbar title={Topics.title} toggle={toggleSidebar}/>
      <div className="flex flex-row content-height h-full w-full">
        {/* Chapter sidebar for routing */}
        <div className="w-0 lg:w-1/4 h-full">
          <Sidebar topic={Topics.topic} subtopics={Topics.subtopics}/>
        </div>
        {/* chapter sidebar for routing for smaller devices */}
        <Sidebar1 isOpen={isSidebarOpen} onClose={toggleSidebar} topic={Topics.topic} subtopics={Topics.subtopics}/>
        {/* Chapter content to be shown here */}
        <div className="w-full lg:w-3/4 content-height overflow-y-scroll">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
