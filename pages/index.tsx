import Navbar from "@/components/Navbar";
import Head from "next/head";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion as Motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Barq Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website showcasing my work and projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-text-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </Motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>
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
