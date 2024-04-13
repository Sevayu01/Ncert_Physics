import Navbar from "../../components/Navbar";
import ModuleCard from "./ModuleCard";
import module from "../../data/modules.json";
import { useState } from "react";

const DashboardPage = () => {
  const { data } = module;
  const [modules] = useState(data);
  const progress = 66;

  return (
    <>
      <Navbar />
      <div className="w-10/12 xl:w-7/12 mb-10 mx-auto pt-4">
        <div className="text-[36px] mb-12 pb-2 border-b-[1px] border-[#BFBFBF]">
          Dashboard
        </div>

        <p className="text-[20px] text-[#87E83B]">
          Progress: <span className="font-bold">{progress}%</span>
        </p>
        <div className="w-full h-6 mt-3 mb-16 rounded-xl relative bg-[#D9D9D9] overflow-hidden">
          <div className={`absolute top-0 bottom-0 left-0 right-[${100-progress}%] bg-[#92ED4B]`}></div>
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
