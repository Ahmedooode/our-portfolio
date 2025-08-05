import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Splash = () => {
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ab
          maiores modi distinctio rerum dolores!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nihil
          adipisci impedit quidem dignissimos molestias ad amet incidunt minus
          repellat!
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit error
          earum odio commodi sint officiis? Facere quis error aspernatur harum
          fuga ducimus facilis nihil fugiat?
        </li>
      </ul>
    </Motion.div>
  );
};

export default Splash;
