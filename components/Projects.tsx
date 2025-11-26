import React from "react";
import SectionTitle from "./SectionTitle";
import { buildsmart, project2, quickCart } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useTranslation } from "next-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation("common");

  const isArabic = i18n.language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      id="projects"
      className="max-w-container mx-auto lgl:px-20 py-24 text-justify"
    >
      <SectionTitle title={t("projects.title")} titleNo="03" />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-20">
        {/* PROJECT ONE — LMS */}
        <div className="flex flex-col xl:flex-row gap-6 text-justify">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://lms-system-5zn4hklhq-ahmedooodes-projects.vercel.app/"
            target="_blank"
          >
            <Image
              className="w-full h-full object-contain"
              src={project2}
              alt="Learning Management System project"
            />
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              {t("projects.featured")}
            </p>

            <h3 className="text-2xl font-bold">{t("projects.lms.title")}</h3>

            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-justify">
              {t("projects.lms.description")}
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>Prisma</li>
              <li>Vercel Deployment</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/lms-system.git"
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
                href="https://lms-system-n7y2je4d3-ahmedooodes-projects.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT TWO — BuildSmart */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://hilarious-mandazi-9d2741.netlify.app/"
            target="_blank"
          >
            <Image
              className="w-full h-full object-contain"
              src={buildsmart}
              alt="BuildSmart project"
            />
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 text-right xl:-ml-16 z-10 items-end">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              {t("projects.featured")}
            </p>

            <h3 className="text-2xl font-bold">
              {t("projects.buildsmart.title")}
            </h3>

            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-justify">
              {t("projects.buildsmart.description")}
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>Prisma</li>
              <li>Vercel Deployment</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/BuildSmart.git"
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

        {/* PROJECT THREE — E-COMMERCE */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://e-commerce-one-seller.vercel.app/"
            target="_blank"
          >
            <Image
              className="w-full h-full object-contain"
              src={quickCart}
              alt="QuickCart project"
            />
          </a>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 text-right xl:-ml-16 z-10 items-end">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              {t("projects.featured")}
            </p>

            <h3 className="text-2xl font-bold">
              {t("projects.ecommerce.title")}
            </h3>

            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-justify">
              {t("projects.ecommerce.description")}
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textDark">
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Typescript</li>
              <li>Tailwindcss</li>
              <li>MongoDB</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/e-commerce-one-seller.git"
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
                href="https://e-commerce-one-seller.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
