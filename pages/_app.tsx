import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [locale]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
