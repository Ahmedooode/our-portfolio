import SectionTitle from "./SectionTitle";
import ComputerVision from "./works/ComputerVision";
import Frontend from "./works/Frontend";
import Fullstack from "./works/Fullstack";
import SystemDesign from "./works/SystemDesign";
import Tools from "./works/Tools";
import { useState } from "react";
import React from "react";

import { useTranslation } from "next-i18next";

const components = {
  A: ComputerVision,
  B: Frontend,
  C: Fullstack,
  D: SystemDesign,
  E: Tools,
};

const Experience = () => {
  type WorkKey = keyof typeof components;
  const workItems: { key: WorkKey; label: string }[] = [
    { key: "A", label: "Computer Vision" },
    { key: "B", label: "Front-End Developer" },
    { key: "C", label: "Full-Stack Developer" },
    { key: "D", label: "System Designer" },
    { key: "E", label: "Tools & Others" },
  ];

  const [work, setWork] = useState<WorkKey | null>(null);

  const selectedComponent = work ? components[work] : null;

  // language HOOKS
  const { t } = useTranslation("common");

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="experience"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title={t("experience.title")} titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {workItems.map(({ key, label }) => (
            <li
              key={key}
              onClick={() => setWork(key)}
              className={`border-l  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium 
        ${
          work === key
            ? "border-l-textGreen text-textGreen bg-[#112240]/70 shadow-[0_0_10px_rgba(94,234,212,0.4)]"
            : "border-l-textDark/30 text-textDark hover:bg-[#112240]"
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
