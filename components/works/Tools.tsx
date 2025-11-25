import { motion as Motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Tools = () => {
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

      <ul className="mt-6 flex flex-col gap-4 text-justify">
        {/* Paragraph 1 */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I am proficient in a range of modern development and collaboration
          tools that streamline the software development process. I regularly
          use Git and GitHub for version control and collaborative coding,
          Postman for testing and interacting with APIs, and Clerk
          Authentication for implementing secure user authentication.
          Additionally, I have experience deploying web applications using
          platforms like Netlify and Vercel, and I leverage AI-assisted coding
          tools to enhance productivity and code quality
        </li>

        {/* Paragraph 2 */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Version Control & Collaboration:
          <span className="text-textGreen tracking-wide">Git, GitHub.</span>
        </li>

        {/* Paragraph 3 */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          API Testing & Interaction:
          <span className="text-textGreen tracking-wide">Postman.</span>
        </li>

        {/* Paragraph 4 */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Authentication Services:
          <span className="text-textGreen tracking-wide">
            {" "}
            Clerk Authentication.
          </span>
        </li>
        {/* Paragraph 5 */}
        <li className="text-base flex gap-3 text-textDark leading-relaxed">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Deployment Platforms:
          <span className="text-textGreen tracking-wide">Netlify, Vercel.</span>
        </li>
      </ul>
    </Motion.div>
  );
};

export default Tools;
