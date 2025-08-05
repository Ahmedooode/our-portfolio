import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Google = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer{" "}
        <span className="text-textGreen tracking-wide">@Barq</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo,
          inventore distinctio deleniti .
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          quibusdam quas perferendis sed nisi illo, quidem nesciunt suscipit
          iste cumque?
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          accusamus explicabo. Ipsam officiis impedit fuga repellendus!
          Consequuntur accusantium dolore veritatis corrupti similique! Quam,
          excepturi dolore.
        </li>
      </ul>
    </Motion.div>
  );
};

export default Google;
