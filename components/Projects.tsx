import React from "react";
import SectionTitle from "./SectionTitle";
import { buildsmart, project2, project22 } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useTranslation } from "next-i18next";

const Projects = () => {
  // language HOOKS :
  const { t, i18n } = useTranslation("common");

  const isArabic = i18n.language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      id="projects"
      className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title={t("projects.title")} titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-20">
        {/* project one */}

        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://lms-system-5zn4hklhq-ahmedooodes-projects.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={project2}
                alt="Learning Management System project"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">LMS Project</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A comprehensive Learning Management System (LMS) designed to
              facilitate online education and training. It offers features such
              as course creation, user management, progress tracking, and
              interactive learning tools to enhance the educational experience
              for both instructors and learners
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>prisma</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://lms-system-5zn4hklhq-ahmedooodes-projects.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* project two */}

        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://hilarious-mandazi-9d2741.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={buildsmart}
                alt="BuildSmart project"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              {t("projects.project1-hint")}
            </p>
            <h3 className="text-2xl font-bold">{t("projects.project-1")}</h3>
            <p
              className="bg-[#112240] text-sm
                            md:text-base p-2 md:p-6 rounded-md"
            >
              {t("projects.buildSmart")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>prisma</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://hilarious-mandazi-9d2741.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* project three */}

        {/* <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://loquacious-kitsune-f69651.netlify.app"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={project22}
                alt="BuildSmart project"
              />
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">BuildSmart Company</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              BuildSmart Company specializes in innovative construction,
              planning, and design solutions. Their team delivers high-quality
              building projects, integrating modern technology and sustainable
              practices to ensure efficient project management and exceptional
              results from concept to completion.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>prisma</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://loquacious-kitsune-f69651.netlify.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
