import React, { FunctionComponent} from "react";
import "./Projects.scss";
import { useLanguage } from "src/LanguageContext";
import projectsList from "../texts.json"
import ProjectCard from "src/component/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const ProjectsSection: FunctionComponent<{ id: string }> = ({
  id
}) => {
  const {currentLanguage} = useLanguage();

  return (
    <div className="projects-section" id={id}>
      <motion.h1 className="projects-section-title section-title" initial={{opacity: 0,translateY:'2rem'}} whileInView={{opacity: 1,translateY:'0'}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}}>
        Best of the best{" "}
        <span>
          {currentLanguage === "en" ? "My selected 📂 projects" : "Mes projets 📂 favoris"}
        </span>
      </motion.h1>
      <div className="grid-projects" id="grid">
        {
          currentLanguage && projectsList[currentLanguage!].map((project,index) => (
            <motion.div initial={{opacity: 0,translateY:'2rem'}} whileInView={{opacity: 1,translateY:'0'}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}}>
              <ProjectCard project={project} additionalClass={index === 0 ? ["first-child"]: (index === projectsList[currentLanguage!].length-1 ? ["last-child"]: [])}/>
            </motion.div>
          
          ))
        }
       
      </div>
    </div>
  );
};

export default ProjectsSection;
