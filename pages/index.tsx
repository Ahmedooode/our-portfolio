import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Head from "next/head";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import {
  motion as Motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { locale } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // Variants use `custom` to get locale and decide direction
  const variants = {
    initial: (loc: string) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, x: loc === "ar" ? 40 : -40 },
    animate: { opacity: 1, x: 0 },
    exit: (loc: string) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, x: loc === "ar" ? -40 : 40 },
  };

  return (
    <div>
      <Head>
        <title>Ahmed Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing my work and projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-2.ico" />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-text-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />

        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          {/* Fixed left column (keeps static) */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </Motion.div>

          {/* -------- Animated center content (ENTER/EXIT based on locale) -------- */}
          <div className="h-[88vh] w-full mx-auto p-4">
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                // KEY triggers exit+enter when locale changes
                key={locale}
                custom={locale}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                // keep same layout classes so it doesn't break page sizing
                className="h-full w-full"
              >
                {/* All page sections — animate together */}
                <Banner />
                <About />
                <Experience />
                <Projects />
                <Archive />
                <Contact />
                <Footer />
              </Motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed right column (keeps static) */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </Motion.div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
