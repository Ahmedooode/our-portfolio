import { useRouter } from "next/router";

export default function LocaleToggle() {
  const router = useRouter();
  const { locale, asPath } = router;

  const handleToggle = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex items-center h-7 w-14 rounded-full border border-textGreen transition-colors duration-300"
    >
      {/* الدائرة */}
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-[#80ce7dab] shadow-md transform transition-transform duration-500 ${
          locale === "ar" ? "translate-x-7" : "translate-x-0"
        }`}
      />
      {/* النصوص */}
      <span className="absolute left-1 text-[10px] font-medium text-textGreen">
        EN
      </span>
      <span className="absolute right-1 text-[10px] font-medium text-textGreen">
        AR
      </span>
    </button>
  );
}
