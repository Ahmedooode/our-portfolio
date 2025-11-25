import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ComputerVision = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer{" "}
        <span className="text-textGreen tracking-wide">
          @ Omdurman Islamic University (OIU) - Graduation Project
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2023 - Sep 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented a computer vision system to detect real and
          fake faces, and integrated the trained model into an attendance
          management system.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Traditional methods face many limitations as they often rely on manual
          processes, are prone to errors, and can be easily manipulated, leading
          to inaccurate attendance records. Leveraging modern image analysis
          techniques and GPU acceleration, we trained a neural network
          (Convolutional Neural Network) to accurately recognize individuals,
          enhancing the system’s ability to detect fake identities with high
          precision. The system features a dynamic graphical user interface
          (GUI) that covers all cases of login and attendance registration,
          ensuring an intuitive and seamless user experience, this project
          demonstrates the integration of advanced technologies in the field of
          computer vision for practical applications in identity verification
          and attendance tracking.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          It is ideally applicable in educational institutions, where it can
          enhance security measures, facilitate verification procedures, and
          ensure a safe learning environment by accurately distinguishing
          between genuine and fraudulent identities.
        </li>
      </ul>
    </Motion.div>
  );
};

export default ComputerVision;
