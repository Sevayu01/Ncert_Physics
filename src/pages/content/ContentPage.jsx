import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Expression from "./contentComponents/Expression";
import Paragraph from "./contentComponents/Paragraph";
import Heading from "./contentComponents/Heading";
import Image from "./contentComponents/Image";
import MobileSidebar from "../../components/MobileSidebar";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import BoldLine from "./contentComponents/BoldLine";
import Description from "./contentComponents/Description";
import SubHeading from "./contentComponents/SubHeading";

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
      const contentImportPath = `../../../public/data/content/${chapter}/${topic}.json`;
      const topicImportPath = `../../../public/data/topics/${chapter}-topics.json`;
      const importedData = await import(/* @vite-ignore */ contentImportPath);
      const importedTopic = await import(/* @vite-ignore */ topicImportPath);
      setData(importedData.data);
      setTopics(importedTopic.default);
    })();
  }, [chapter, topic]);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar title={topics.title} toggle={toggleSidebar} />
      <div className="flex flex-row content-height">
        <Sidebar topic={topics.topic} subtopics={topics.subtopics} />

        <MobileSidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          topic={topics.topic}
          subtopics={topics.subtopics}
        />

        <div className="w-full pl-6 pr-24 pb-10 overflow-y-scroll">
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
                return <Image key={idx} alt={element.alt} body={element.body} />;
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
