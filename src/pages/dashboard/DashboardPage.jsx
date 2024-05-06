import Navbar from "../../components/Navbar";
import ModuleCard from "./ModuleCard";
import module from "../../../public/data/modules.json";
import { useEffect, useState } from "react";
import { fetchScoreList } from "../../db";

const DashboardPage = () => {
  const { data } = module;
  const [modules] = useState(data);
  const [progress, setProgress] = useState(null);

  const progressBarStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: `${progress}%`,
    backgroundColor: "#92ED4B",
  };

  useEffect(() => {
    (async () => {
      const scoreList = await fetchScoreList();
      let completedModules = 0;
      for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i].score < 70) continue;

        completedModules++;
      }
      setProgress(Math.floor((completedModules / data.length) * 100));
    })()
  }, []);

  if (progress === null) return <div>Loading...</div>;

  return (
    <>
      <Navbar isDashboardPage={true} />

      <div className="w-10/12 pt-4 mx-auto mb-10 xl:w-7/12">
        <div className="text-[36px] mb-12 pb-2 border-b-[1px] border-[#BFBFBF]">
          Dashboard
        </div>

        <p className="text-[20px] text-[#87E83B]">
          Progress: <span className="font-bold">{progress}%</span>
        </p>
        <div className="w-full h-6 mt-3 mb-16 rounded-xl relative bg-[#D9D9D9] overflow-hidden">
          <div style={progressBarStyle}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {modules.map((module, idx) => (
            <ModuleCard name={module.name} link={module.link} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
