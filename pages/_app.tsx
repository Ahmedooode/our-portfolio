import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [dir, setDir] = useState(locale === "ar" ? "rtl" : "ltr");

  useEffect(() => {
    // Set text direction
    const newDir = locale === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.dir = newDir;

    // Set lang attribute
    document.documentElement.lang = locale || "en";

    // Switch font
    const html = document.documentElement;
    if (locale === "ar") {
      html.classList.add("font-arabicFont");
      html.classList.remove("font-bodyFont");
    } else {
      html.classList.add("font-bodyFont");
      html.classList.remove("font-arabicFont");
    }
  }, [locale]);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
