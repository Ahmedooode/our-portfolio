import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { useTranslation } from "next-i18next";

const Tools = () => {
  const { t, i18n } = useTranslation("common");
  const isArabic = i18n.language === "ar";

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={`w-full ${isArabic ? "font-arabicFont" : ""}`}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {t("tools.role")}{" "}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark text-start">
        {t("tools.date")}
      </p>

      <ul className="mt-6 flex flex-col gap-4 text-justify">
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          {t("tools.intro")}
        </li>

        {/* E-commerce Platforms */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          <div>
            {t("tools.ecommerce")}
            <span className="text-textGreen tracking-wide">
              WordPress, Salla, Zed, Sndian, Shopify.
            </span>
          </div>
        </li>

        {/* ERP Systems */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1 shrink-0">
            <TiArrowForward className={isArabic ? "rotate-180" : ""} />
          </span>
          <div>
            {t("tools.erpInterest")}
            <span className="text-textGreen tracking-wide">
              Odoo, NextERP, Oracle, Zoho, SAP.
            </span>
          </div>
        </li>
      </ul>
    </Motion.div>
  );
};

export default Tools;
