import React from "react";
import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Amazon = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@Barq</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          corrupti nisi qui officia eaque quos!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          cupiditate quod? Natus magni sunt nihil rerum fuga harum odit commodi!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos
          libero molestiae enim. Reiciendis, fugit ad. Odit quidem, in corporis
          deleniti corrupti iste obcaecati nihil!
        </li>
      </ul>
    </Motion.div>
  );
};

export default Amazon;
