import React, { FunctionComponent } from "react";
import "./Projects.scss";
import { useLanguage } from "src/LanguageContext";
import projectsList from "../texts.json";
import ProjectCard from "src/component/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection: FunctionComponent<{ id: string }> = ({ id }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="projects-section" id={id}>
      <motion.div
        className="projects-section-texts"
        initial={{ opacity: 0, translateY: "2rem" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ ease: "anticipate", duration: 1 }}
        viewport={{ once: true }}
      >
        <h1
          key={currentLanguage + "-projects-h1"}
          className="projects-section-texts-title section-title"
        >
          Best of the best{" "}
          <span>
            {currentLanguage === "en"
              ? "My selected 📂 projects"
              : "Mes projets 📂 favoris"}
          </span>
        </h1>
        <p
          key={currentLanguage + "-projects-p"}
          className="projects-section-texts-description"
        >
          {currentLanguage === "en"
            ? "A selection of my top projects that showcase my skills in frontend and backend development and UI/UX experiences."
            : "Une sélection de mes meilleurs projets, mettant en avant mes compétences en développement frontend et backend ainsi qu’en UI/UX."}
        </p>
      </motion.div>

      <div className="grid-projects" id="grid">
        {currentLanguage &&
          projectsList[currentLanguage!].map((project, index) => (
            <motion.div
              initial={{ opacity: 0, translateY: "2rem" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ ease: "anticipate", duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                additionalClass={
                  index === 0
                    ? ["first-child"]
                    : index === projectsList[currentLanguage!].length - 1
                    ? ["last-child"]
                    : []
                }
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
