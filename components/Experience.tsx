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
  A: Fullstack,
  B: SystemDesign,
  C: ComputerVision,
  D: Frontend,
  E: Tools,
};

const Experience = () => {
  type WorkKey = keyof typeof components;

  const { t, i18n } = useTranslation("common");
  const isArabic = i18n.language === "ar";

  const workItems: { key: WorkKey; label: string }[] = [
    { key: "A", label: t("experience.tabs.fullstack") }, // Using translations for labels
    { key: "B", label: t("experience.tabs.design") },
    { key: "C", label: t("experience.tabs.vision") },
    { key: "D", label: t("experience.tabs.frontend") },
    { key: "E", label: t("experience.tabs.platforms") },
  ];

  // Default to the first item ("A") so the screen isn't empty on load
  const [work, setWork] = useState<WorkKey>("A");

  const SelectedComponent = components[work];

  return (
    <section
      id="experience"
      className={`max-w-containerSmall mx-auto py-10 lgl:py-24 px-4 ${isArabic ? "font-arabicFont" : ""}`}
    >
      <SectionTitle title={t("experience.title")} titleNo="02" />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* TAB NAVIGATION */}
        <div className="relative">
          <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden scrollbar-hide border-b md:border-b-0 md:border-l border-l-textDark/20 border-b-textDark/20">
            {workItems.map(({ key, label }) => (
              <li
                key={key}
                onClick={() => setWork(key)}
                className={`min-w-[140px] md:min-w-fit whitespace-nowrap py-3 text-sm cursor-pointer duration-300 px-4 md:px-8 font-medium text-center md:text-start
                  ${
                    work === key
                      ? "text-textGreen bg-[#112240]/50"
                      : "text-textDark hover:bg-[#112240]"
                  }
                  /* Mobile Border Logic */
                  border-b-2 md:border-b-0 
                  ${work === key ? "border-b-textGreen" : "border-b-transparent"}
                  /* Desktop Border Logic */
                  md:border-l-2 
                  ${work === key ? "md:border-l-textGreen" : "md:border-l-transparent"}
                  ${isArabic ? "md:border-l-0 md:border-r-2" : ""}
                  ${isArabic && work === key ? "md:border-r-textGreen" : "md:border-r-transparent"}
                `}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT AREA */}
        <div className="w-full min-h-[300px]">
          <SelectedComponent />
        </div>
      </div>
    </section>
  );
};

export default Experience;
