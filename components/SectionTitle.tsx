import { useTranslation } from "next-i18next";

interface Props {
  title: string;
  titleNo: string;
}
const SectionTitle = ({ title, titleNo }: Props) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <h2
      dir={isArabic ? "rtl" : "ltr"}
      className={`text-3xl font-semibold flex items-center p-2 ${
        isArabic ? "font-arabicFont font-extrabold text-2xl" : "font-titleFont"
      }`}
    >
      <span className="text-base md:text-lg text-textGreen mr-2 ml-3">
        {titleNo}.
      </span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6 mr-6"></span>
    </h2>
  );
};

export default SectionTitle;
