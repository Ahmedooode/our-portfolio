import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import React from "react";

const Frontend = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Wep Developer{" "}
        <span className="text-textGreen tracking-wide">@Barq</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">2020 - 2022</p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on multiple front-end projects using HTML, CSS, JavaScript,
          React, Next.js and UI best practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built responsive interfaces and improved user experience across client
          and personal projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with designers and back-end developers to deliver
          seamless web applications.
        </li>
      </ul>
    </Motion.div>
  );
};

export default Frontend;
