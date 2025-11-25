import React from "react";
import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Fullstack = () => {
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
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Full Stack Developer with experience in the MERN stack, RESTful API
          development, SQL and NoSQL databases, and application deployment.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Familiar with basic system design principles for building scalable and
          maintainable web applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Strong problem-solving skills and ability to work collaboratively in
          team environments.
        </li>
      </ul>
    </Motion.div>
  );
};

export default Fullstack;
