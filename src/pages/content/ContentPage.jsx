import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Expression from "./contentComponents/Expression";
import Paragraph from "./contentComponents/Paragraph";
import Heading from "./contentComponents/Heading";
import Image from "./contentComponents/Image";
import MobileSidebar from "../../components/MobileSidebar";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import MobileNavbar from "../../components/MobileNavbar";
import BoldLine from "./contentComponents/BoldLine";
import Description from "./contentComponents/Description";
import SubHeading from "./contentComponents/SubHeading";
import ContentImport from "../../chapterImportService.js";

const ContentPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [topics, setTopics] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { chapter, topic } = useParams();

  useEffect(() => {
    (async () => {

      const importedData = ContentImport({ chapter: chapter, topic: topic });
      const importedTopic = ContentImport({ chapter: chapter, type: "topics" });
      setData(importedData.data);
      setTopics(importedTopic);
    })();
  }, [chapter, topic]);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar title={topics.title} />
      <MobileNavbar title={topics.title} toggle={toggleSidebar} />

      <div className="flex flex-row content-height relative">
        <Sidebar topic={topics.topic} subtopics={topics.subtopics} />

        <MobileSidebar
          isOpen={isSidebarOpen}
          toggle={toggleSidebar}
          topic={topics.topic}
          subtopics={topics.subtopics}
        />

        <div className="w-full pl-6 pr-6 sm:pr-24 pb-10 overflow-y-scroll">
          {data.map((element, idx) => {
            switch (element.name) {
              case "heading":
                return <Heading key={idx} heading={element.body} />;
              case "subheading":
                return <SubHeading key={idx} heading={element.body} />;
              case "paragraph":
                return <Paragraph key={idx} text={element.body} />;
              case "description":
                return <Description key={idx} text={element.body} />;
              case "image":
                return (
                  <Image key={idx} alt={element.alt} body={element.body} />
                );
              case "expression":
                return <Expression latex={element.body} />;
              case "bold":
                return <BoldLine key={idx} text={element.body} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
