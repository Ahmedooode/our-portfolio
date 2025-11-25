import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const SystemDesign = () => {
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
        Jan 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designing scalable and maintainable systems, database selection and
          sizing, server capacity planning (scale-up / scale-out),
          infrastructure configuration, architectural diagrams, best practices
          for applying technical tools.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Diagramming / Architecture Design: diagrams.net (Draw.io)
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Database Design & Sizing: MySQL Workbench, dbdiagram.io, ERDPlus,
          PostgreSQL Designer.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Monitoring & Performance Estimation: Prometheus, Grafana, New Relic .
          (Logs & Metrics)
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Server Capacity Planning (Scale-Up / Scale-Out)
        </li>
      </ul>
    </Motion.div>
  );
};

export default SystemDesign;
