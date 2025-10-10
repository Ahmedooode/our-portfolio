import { motion as Motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation("common");

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10  xl:px-4"
    >
      <Motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={`text-lg tracking-wide text-textGreen ${
          isArabic ? "font-arabicFont" : "font-titleFont"
        }`}
      >
        {t("banner.subtitle")}
      </Motion.h3>

      <Motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`text-4xl lgl:text-6xl font-semibold flex flex-col ${
          isArabic ? "font-arabicFont" : "font-titleFont"
        }`}
      >
        {t("banner.title")}{" "}
        <span className="text-textDark mt-2 lgl:mt-4 whitespace-nowrap">
          {t("banner.tagline")}
        </span>
      </Motion.h1>

      <Motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={`text-base md:max-w-[650px] font-semibold  text-textDark ${
          isArabic ? "font-arabicFont" : ""
        }`}
      >
        {t("banner.description")}{" "}
        <a href="" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            {t("banner.learnMore")}
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </Motion.p>

      <Motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className={`w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ${
          isArabic ? "font-arabicFont" : "font-titleFont"
        }`}
      >
        {t("banner.cta")}
      </Motion.button>
    </section>
  );
};

export default Banner;
