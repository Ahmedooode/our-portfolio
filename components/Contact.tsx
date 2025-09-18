import React from "react";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation("common");

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="contact"
      className={`max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center ${
        isArabic ? "font-arabicFont" : ""
      }`}
    >
      <p
        className={`text-lg text-textGreen font-semibold flex items-center tracking-wide ${
          isArabic ? "font-arabicFont" : "font-titleFont"
        }`}
      >
        {t("contact.subtitle")}
      </p>
      <h2
        className={`${
          isArabic ? "font-arabicFont" : "font-titleFont"
        } text-5xl font-semibold`}
      >
        {t("contact.title")}
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        {t("contact.description")}
      </p>
      <a href="mailto:emailofme@gmail.com">
        <button
          className={`w-40 h-14 border border-textGreen mt-6 text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 ${
            isArabic ? "font-arabicFont" : "font-titleFont"
          }`}
        >
          {t("contact.button")}
        </button>
      </a>
    </section>
  );
};

export default Contact;
