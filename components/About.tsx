import { profileImg } from "../public/assets";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t, i18n } = useTranslation("common");
  const isArabic = i18n.language === "ar";

  const skillKeys = [
    "js",
    "next",
    "ts",
    "react",
    "node",
    "prisma",
    "docker",
    "git",
    "postman",
    "uiux",
    "auth",
  ];

  return (
    <section
      id="about"
      className={`max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 text-justify ${isArabic ? "font-arabicFont" : ""}`}
    >
      <SectionTitle title={t("about.sectionTitle")} titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
            {skillKeys.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {t(`about.skills.${skill}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Image code remains the same as your snippet */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profile"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
