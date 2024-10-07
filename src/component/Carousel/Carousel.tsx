import React, { FunctionComponent } from "react";
import "./Carousel.scss";
import projectsList from "../../texts.json"
import { useLanguage } from "src/LanguageContext";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Carousel: FunctionComponent = () => {

  const {currentLanguage} = useLanguage();

  return (
    <div className="carousel">
      {currentLanguage && projectsList[currentLanguage!].map((project,index) => (
         <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ ease: "anticipate", duration:1,delay:.25*index }} viewport={{once:true}}>
        <ProjectCard project={project} additionalClass={index === 0 ? ["first-child"]: (index === projectsList[currentLanguage!].length-1 ? ["last-child"]: [])}/>
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;