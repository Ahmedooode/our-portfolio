import { logo } from "@/public/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";

const Navbar = () => {
  // HOOKS
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<string | any>("");

  // EVENT HANDLERS

  function handleClick(e: any) {
    if (e.target.contain(ref.current)) {
      // do something with myRef.current
      setShowMenu(false);
    }
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="w-14 border border-green-900 rounded-full "
            src={logo}
            alt="logo"
          />
        </Motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <Motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
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
                transition={{ duration: 0.1 }}
              >
                <span>01.</span>about
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
                transition={{ duration: 0.1 }}
              >
                <span>02.</span>Experience
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
                transition={{ duration: 0.1 }}
              >
                <span>03.</span>Projects
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
                transition={{ duration: 0.1 }}
              >
                <span>04.</span>Contact
              </Motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.png" target="_blank">
            <Motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-4 px-4 py-2 border border-textGreen text-textGreen text-sm rounded-md hover:bg-hoverColor transition duration-300"
            >
              Resume
            </Motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {/* Mobile Navbar */}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <Motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
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
                      Home
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
                      <span>01.</span>about
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
                      <span>02.</span>Experience
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
                      <span>03.</span>Projects
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
                      <span>04.</span>Contact
                    </Motion.li>
                  </Link>
                </ul>
                <a href="/assets/resume.png" target="_blank">
                  <Motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 border border-textGreen text-textGreen text-[13px] rounded-md hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </Motion.button>
                </a>
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
                href="mailto:ahmedemail@gmail.com"
              >
                <p>email.me@gmail.com</p>
              </Motion.a>
            </Motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
