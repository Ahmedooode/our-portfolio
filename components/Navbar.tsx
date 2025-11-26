// import { logo } from "@/public/assets";
import { profileImg } from "../public/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";

import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslation } from "next-i18next";

import { createHandleScroll } from "../public/utils/handleScroll";

const Navbar = () => {
  // HOOKS
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<string | any>("");

  const { t, i18n } = useTranslation("common");

  const isArabic = i18n.language === "ar";

  // EVENT HANDLERS

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShowMenu(false);
    }
  }
  // Handle scroll with optional menu state setter
  const handleScroll = createHandleScroll(setShowMenu);

  return (
    <div
      dir="ltr"
      className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4"
    >
      <div
        className={`max-w-container h-full mx-auto py-1 grid grid-cols-3 items-center ${
          isArabic ? "font-arabicFont" : "font-titleFont"
        }`}
      >
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-green-900">
            <Image
              className="w-14 h-14 object-cover rounded-full "
              src={profileImg}
              alt="logo"
            />
          </div>
        </Motion.div>

        <ul
          className={`hidden mdl:flex items-center justify-center text-[13px] gap-8 md:mr-16 ${
            i18n.language === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <Link
            href="#home"
            className="flex items-center m-2 gap-1 text-base md:text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            onClick={handleScroll}
          >
            <Motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {t("nav.home")}
            </Motion.li>
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-1  m-2 text-base md:text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            onClick={handleScroll}
          >
            <Motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="flex items-center"
            >
              {i18n.language === "ar" ? (
                <>{t("nav.about")}</>
              ) : (
                <>
                  <span className="mr-2">01.</span>
                  {t("nav.about")}
                </>
              )}
            </Motion.li>
          </Link>
          <Link
            href="#experience"
            className="flex items-center gap-1  m-2 text-base md:text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            onClick={handleScroll}
          >
            <Motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="flex items-center"
            >
              {i18n.language === "ar" ? (
                <>{t("nav.experience")}</>
              ) : (
                <>
                  <span className="mr-2">02.</span>
                  {t("nav.experience")}
                </>
              )}
            </Motion.li>
          </Link>
          <Link
            href="#projects"
            className="flex items-center gap-1 m-2 text-base md:text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            onClick={handleScroll}
          >
            <Motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="flex items-center"
            >
              {i18n.language === "ar" ? (
                <>{t("nav.projects")}</>
              ) : (
                <>
                  <span className="mr-2">03.</span>
                  {t("nav.projects")}
                </>
              )}
            </Motion.li>
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-1 m-2 text-base md:text-lg font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            onClick={handleScroll}
          >
            <Motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="flex items-center"
            >
              {i18n.language === "ar" ? (
                <>{t("nav.contact")}</>
              ) : (
                <>
                  <span className="mr-2">04.</span>
                  {t("nav.contact")}
                </>
              )}
            </Motion.li>
          </Link>
        </ul>

        {/* Right: Resume + LocaleSwitcher */}
        <div className="hidden mdl:flex items-center justify-end gap-4">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 border border-textGreen text-textGreen text-sm rounded-md hover:bg-hoverColor transition duration-300"
            >
              {t("nav.resume")}
            </Motion.button>
          </a>
          <LocaleSwitcher />
        </div>
      </div>
      {/* Small Icon Section */}
      <div
        onClick={() => setShowMenu(true)}
        className="absolute right-4 top-6 w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
      >
        <span className="w-full h-[2px] bg-textGreen inline-flex transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
        <span className="w-full h-[2px] bg-textGreen inline-flex transition-all duration-300 ease-in-out translate-x-3 group-hover:translate-x-0"></span>
        <span className="w-full h-[2px] bg-textGreen inline-flex transition-all duration-300 ease-in-out translate-x-1 group-hover:translate-x-3"></span>
      </div>
      {/* Mobile Navbar */}
      {showMenu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end z-[60]"
        >
          <Motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative z-[70]"
          >
            <MdOutlineClose
              onClick={() => setShowMenu(false)}
              className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
            />
            <div className="flex flex-col items-center gap-7">
              {" "}
              <ul className="flex flex-col text-base gap-7">
                <Link
                  href="#home"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}
                >
                  <Motion.li
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.1, ease: "easeIn" }}
                  >
                    {i18n.language === "ar" ? (
                      <>{t("nav.home")}</>
                    ) : (
                      <>{t("nav.home")}</>
                    )}
                  </Motion.li>
                </Link>
                <Link
                  href="#about"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}
                >
                  <Motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                  >
                    {i18n.language === "ar" ? (
                      <>{t("nav.about")}</>
                    ) : (
                      <>
                        <span className="mr-2">01.</span>
                        {t("nav.about")}
                      </>
                    )}
                  </Motion.li>
                </Link>
                <Link
                  href="#experience"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}
                >
                  <Motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                  >
                    {i18n.language === "ar" ? (
                      <>{t("nav.experience")}</>
                    ) : (
                      <>
                        <span className="mr-2">02.</span>
                        {t("nav.experience")}
                      </>
                    )}
                  </Motion.li>
                </Link>
                <Link
                  href="#projects"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}
                >
                  <Motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeIn" }}
                  >
                    {i18n.language === "ar" ? (
                      <>{t("nav.projects")}</>
                    ) : (
                      <>
                        <span className="mr-2">03.</span>
                        {t("nav.projects")}
                      </>
                    )}
                  </Motion.li>
                </Link>
                <Link
                  href="#contact"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}
                >
                  <Motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
                  >
                    {i18n.language === "ar" ? (
                      <>{t("nav.contact")}</>
                    ) : (
                      <>
                        <span className="mr-2">04.</span>
                        {t("nav.contact")}
                      </>
                    )}
                  </Motion.li>
                </Link>
              </ul>
              <a href="/assets/resume.pdf" target="_blank">
                <Motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, ease: "easeIn" }}
                  className="w-32 h-10 border border-textGreen text-textGreen text-[13px] rounded-md hover:bg-hoverColor duration-300"
                >
                  {t("nav.resume")}
                </Motion.button>
              </a>
              {/*  Language Switcher for mobile */}
              <LocaleSwitcher />
              {/* contacts Icons in Mobile Navbar */}
              <div className="flex gap-4">
                <Motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, ease: "easeIn" }}
                  href="https://github.com/Ahmedooode"
                  target="_blank"
                >
                  <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGithub />
                  </span>
                </Motion.a>

                <Motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeIn" }}
                  href="https://www.linkedin.com/in/Ahmedooode"
                  target="_blank"
                >
                  <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialLinkedin />
                  </span>
                </Motion.a>
                <Motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, ease: "easeIn" }}
                  href="https://www.youtube.com/c/Ahmedooode"
                  target="_blank"
                >
                  <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialYoutube />
                  </span>
                </Motion.a>
                <Motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: "easeIn" }}
                  href="https://www.facebook.com/Ahmedooode"
                  target="_blank"
                >
                  <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialFacebook />
                  </span>
                </Motion.a>
              </div>
            </div>
            <Motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, ease: "easeIn" }}
              className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
              href="mailto:ahmedooode@gmail.com"
            >
              <p>{t("nav.email")}</p>
            </Motion.a>
          </Motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
