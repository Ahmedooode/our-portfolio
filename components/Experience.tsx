import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Apple from "./works/Apple";
import Amazon from "./works/Amazon";
import Google from "./works/Google";
import Splash from "./works/Splash";
import { useState } from "react";
import React from "react";
const components = { A: ReactBD, B: Apple, C: Amazon, D: Google, E: Splash };

const Experience = () => {
  type WorkKey = keyof typeof components;
  const workItems: { key: WorkKey; label: string }[] = [
    { key: "A", label: "ReactBD" },
    { key: "D", label: "Google" },
    { key: "B", label: "Apple" },
    { key: "E", label: "Splash" },
    { key: "C", label: "Amazon" },
  ];

  const [work, setWork] = useState<WorkKey | null>(null);

  const selectedComponent = work ? components[work] : null;

  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where We have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {workItems.map(({ key, label }) => (
            <li
              key={key}
              onClick={() => setWork(key)}
              className={`border-l  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium 
        ${
          work === key
            ? "border-l-textGreen text-textGreen"
            : "border-l-textDark/30 text-textDark"
        }`}
            >
              {label}
            </li>
          ))}
        </ul>
        <div className="md:w-[600px]">
          {selectedComponent && React.createElement(selectedComponent)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
