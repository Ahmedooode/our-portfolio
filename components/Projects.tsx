import React, { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import {
  buildsmart,
  buildsmart2,
  buildsmart4,
  buildsmart5,
  buildsmart6,
  buildsmart7,
  lms1,
  lms2,
  lms3,
  quickCart1,
  quickCart2,
  quickCart3,
  quickCart4,
  quickCart5,
  quickCart6,
  wujud,
  wujud2,
  wujud3,
  wujud4,
  atmosphere1,
  atmosphere2,
  atmosphere3,
  atmosphere4,
  atmosphere5,
} from "@/public/assets";

import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
  alt: string;
}

const ProjectImageSlider = ({ images, alt }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg group bg-[#0a192f] border border-textGreen/20 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-textGreen/5 group-hover:bg-transparent duration-300 pointer-events-none"></div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-textGreen" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const { t, i18n } = useTranslation("common");
  const isArabic = i18n.language === "ar";

  const wujudImages = [wujud, wujud2, wujud3, wujud4];
  const atmosphereImages = [
    atmosphere1,
    atmosphere2,
    atmosphere3,
    atmosphere4,
    atmosphere5,
  ];
  const lmsImages = [lms1, lms2, lms3];
  const buildSmartImages = [
    buildsmart,
    buildsmart2,
    buildsmart4,
    buildsmart5,
    buildsmart6,
    buildsmart7,
  ];
  const quickCartImages = [
    quickCart1,
    quickCart2,
    quickCart3,
    quickCart4,
    quickCart5,
    quickCart6,
  ];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      id="projects"
      className="max-w-container mx-auto lgl:px-20 py-24 px-4"
    >
      <SectionTitle title={t("projects.title")} titleNo="03" />

      <div className="w-full flex flex-col items-center justify-between gap-32 mt-20">
        {/* Project 1 - Wujud (Left Image, Right Text) */}
        <div className="flex flex-col xl:flex-row gap-6 w-full relative">
          <a
            className="w-full xl:w-7/12 h-[300px] md:h-[450px] relative"
            href="https://wujud-lime.vercel.app/ar"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImageSlider images={wujudImages} alt="Wujud project" />
          </a>
          <div
            className={`w-full xl:w-5/12 flex flex-col gap-6 items-end text-right z-10 ${isArabic ? "xl:-mr-16" : "xl:-ml-16"} mt-4 xl:mt-10`}
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                {t("projects.featured")}
              </p>
              <h3 className="text-2xl font-bold hover:text-textGreen cursor-pointer duration-300">
                {t("projects.wujood.title")}
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md shadow-xl text-justify border border-white/5">
              {t("projects.wujood.description")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 text-textDark justify-end">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>Clerk</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/wujud.git"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://wujud-lime.vercel.app/ar"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - Atmosphere (Right Image, Left Text) */}
        <div className="flex flex-col xl:flex-row-reverse gap-6 w-full relative">
          <a
            className="w-full xl:w-7/12 h-[300px] md:h-[450px] relative"
            href="https://atmosphere-cafe.vercel.app/ar"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImageSlider
              images={atmosphereImages}
              alt="Atmosphere project"
            />
          </a>
          <div
            className={`w-full xl:w-5/12 flex flex-col gap-6 items-start text-left z-10 ${isArabic ? "xl:-ml-16" : "xl:-mr-16"} mt-4 xl:mt-10`}
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                {t("projects.featured")}
              </p>
              <h3 className="text-2xl font-bold hover:text-textGreen cursor-pointer duration-300">
                {t("projects.atmosphere.title")}
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md shadow-xl text-justify border border-white/5">
              {t("projects.atmosphere.description")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 text-textDark justify-start">
              <li>Next.js</li>
              <li>Salla API</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://atmosphere-cafe.vercel.app/ar"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - LMS (Left Image, Right Text) */}
        <div className="flex flex-col xl:flex-row gap-6 w-full relative">
          <a
            className="w-full xl:w-7/12 h-[300px] md:h-[450px] relative"
            href="https://lms-system.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImageSlider images={lmsImages} alt="LMS project" />
          </a>
          <div
            className={`w-full xl:w-5/12 flex flex-col gap-6 items-end text-right z-10 ${isArabic ? "xl:-mr-16" : "xl:-ml-16"} mt-4 xl:mt-10`}
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                {t("projects.featured")}
              </p>
              <h3 className="text-2xl font-bold hover:text-textGreen cursor-pointer duration-300">
                {t("projects.lms.title")}
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md shadow-xl text-justify border border-white/5">
              {t("projects.lms.description")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 text-textDark justify-end">
              <li>Next.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Prisma</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/lms-system.git"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://lms-system.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 - BuildSmart (Right Image, Left Text) */}
        <div className="flex flex-col xl:flex-row-reverse gap-6 w-full relative">
          <a
            className="w-full xl:w-7/12 h-[300px] md:h-[450px] relative"
            href="https://hilarious-mandazi-9d2741.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImageSlider
              images={buildSmartImages}
              alt="BuildSmart project"
            />
          </a>
          <div
            className={`w-full xl:w-5/12 flex flex-col gap-6 items-start text-left z-10 ${isArabic ? "xl:-ml-16" : "xl:-mr-16"} mt-4 xl:mt-10`}
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                {t("projects.featured")}
              </p>
              <h3 className="text-2xl font-bold hover:text-textGreen cursor-pointer duration-300">
                {t("projects.buildsmart.title")}
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md shadow-xl text-justify border border-white/5">
              {t("projects.buildsmart.description")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 text-textDark justify-start">
              <li>React</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/BuildSmart.git"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://hilarious-mandazi-9d2741.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 - QuickCart (Left Image, Right Text) */}
        <div className="flex flex-col xl:flex-row gap-6 w-full relative">
          <a
            className="w-full xl:w-7/12 h-[300px] md:h-[450px] relative"
            href="https://e-commerce-one-seller.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectImageSlider
              images={quickCartImages}
              alt="QuickCart project"
            />
          </a>
          <div
            className={`w-full xl:w-5/12 flex flex-col gap-6 items-end text-right z-10 ${isArabic ? "xl:-mr-16" : "xl:-ml-16"} mt-4 xl:mt-10`}
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                {t("projects.featured")}
              </p>
              <h3 className="text-2xl font-bold hover:text-textGreen cursor-pointer duration-300">
                {t("projects.ecommerce.title")}
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-4 md:p-6 rounded-md shadow-xl text-justify border border-white/5">
              {t("projects.ecommerce.description")}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 text-textDark justify-end">
              <li>Next.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Stripe</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ahmedooode/e-commerce-one-seller.git"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://e-commerce-one-seller.vercel.app/"
                target="_blank"
                rel="noreferrer"
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
