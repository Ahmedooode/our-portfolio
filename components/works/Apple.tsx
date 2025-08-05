import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

import React from "react";

const Apple = () => {
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          numquam. Suscipit nemo labore dolorem omnis!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut repellat
          dolorum tempora commodi animi ipsum numquam nostrum accusamus
          laudantium incidunt!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, nemo
          modi facilis delectus, tempora dignissimos at, blanditiis odio in
          repellat error fugiat odit quo accusantium.
        </li>
      </ul>
    </Motion.div>
  );
};

export default Apple;
