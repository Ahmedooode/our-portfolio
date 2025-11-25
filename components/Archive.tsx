import React from "react";
import ArchiveCard from "./ArchiveCard";
import { useState } from "react";
import { motion as Motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the Archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {/* project one */}
        <ArchiveCard
          title="Real vs Fake face detection"
          description="Graduation Project"
          listItems={[
            { key: 1, value: "Python" },
            { key: 2, value: "Yolo" },
            { key: 3, value: "OpenCV" },
          ]}
          link="https://github.com/Ahmedooode/real-vs-fake-face-detection.git"
        />
        {/* project two */}
        <ArchiveCard
          title="Weather App"
          description="A simple React project that displays the weather by entering a city name."
          listItems={[
            { key: 1, value: "reactjs" },
            { key: 2, value: "tailwind" },
            { key: 3, value: "HTML" },
          ]}
          link="https://github.com/Ahmedooode/weather-app-by-city-name.git"
        />
        {/* project three */}
        <ArchiveCard
          title="php to do project"
          description="A simple to-do application built with PHP and MySQL."
          listItems={[
            { key: 1, value: "PHP" },
            { key: 2, value: "MySQL" },
            { key: 3, value: "HTML" },
          ]}
          link="https://github.com/Ahmedooode/php-todo-project.git"
        />
        {/* project four */}
        <ArchiveCard
          title="Salaty - Prayer Time App"
          description="A mobile app that provides accurate prayer times based on user location."
          listItems={[
            { key: 1, value: "HTML" },
            { key: 2, value: "CSS" },
            { key: 3, value: "JavaScript" },
          ]}
          link="https://github.com/Ahmedooode/salaty.git"
        />
        {/* project five */}
        <ArchiveCard
          title="Chess Game"
          description="A Java-based chess game with a graphical user interface (GUI) that allows two players to play against each other."
          listItems={[
            { key: 1, value: "Java" },
            { key: 2, value: "JDBC" },
            { key: 3, value: "OOP" },
          ]}
          link="https://github.com/Ahmedooode/java-learning-projects.git"
        />
        {/* project six */}
        <ArchiveCard
          title="Todo List React App"
          description="A React-based to-do list application that helps users manage their tasks efficiently."
          listItems={[
            { key: 1, value: "ReactJS" },
            { key: 2, value: "Tailwind CSS" },
            { key: 3, value: "HTML" },
          ]}
          link="https://github.com/Ahmedooode/To-Do-list-CRUD.git"
        />

        {showMore && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Simple react form hooks"
                description="Learning react Hooks "
                listItems={[
                  { key: 1, value: "reactjs" },
                  { key: 2, value: "CSS" },
                  { key: 3, value: "HTML" },
                ]}
                link="https://github.com/Ahmedooode/simple-react-form-hooks.git"
              />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Simple CRUD"
                description="simple javaScript CRUD application"
                listItems={[
                  { key: 1, value: "JavaScript" },
                  { key: 2, value: "CSS" },
                  { key: 3, value: "HTML" },
                ]}
                link="https://github.com/Ahmedooode/simple-CRUDS.git"
              />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="penalty kick game"
                description="A simple penalty kick game built with scratch."
                listItems={[
                  { key: 1, value: "scratch" },
                  { key: 2, value: "CSS" },
                  { key: 3, value: "HTML" },
                ]}
                link="https://github.com/Ahmedooode/penalty-kicks-game.git"
              />
            </Motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
