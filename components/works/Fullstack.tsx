import React from "react";
import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { useTranslation } from "next-i18next";

const Fullstack = () => {
  const { t, i18n } = useTranslation("common");
  const isArabic = i18n.language === "ar";

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={`w-full ${isArabic ? "font-arabicFont" : ""}`}
    >
      <h3 className="flex flex-wrap gap-1 font-medium text-xl font-titleFont">
        {t("fullstack.role")}
        <span className="text-textGreen tracking-wide">
          {t("fullstack.organization")}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark text-start">
        {t("fullstack.date")}
      </p>

      <ul className="mt-6 flex flex-col gap-3 text-justify">
        {/* Bullet 1 - Role & Company Focus */}
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          {t("fullstack.bullet1")}
        </li>

        {/* Bullet 2 - Technical Systems (EMS/GPS) */}
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          {t("fullstack.bullet2")}
        </li>

        {/* Bullet 3 - Scale & Multi-tenancy */}
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          {t("fullstack.bullet3")}
        </li>
      </ul>
    </Motion.div>
  );
};

export default Fullstack;
