import React, { FunctionComponent, useState } from "react";
import "./ServicesSection.scss";
import { useLanguage } from "src/LanguageContext";
import { motion } from "framer-motion";
import projectsList from "../services.json"
import ServiceCard from "src/component/ServiceCard/ServiceCard";

const ServicesSection: FunctionComponent<{ id: string }> = ({ id }) => {
  const { currentLanguage } = useLanguage();
  const [gridAnimationDone,setGridAnimationDone] = useState(false);

  return (
    <div className="tools-section" id={id}>
      <motion.div
        className="tools-section-texts"
        initial={{ opacity: 0, translateY: "2rem" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ ease: "anticipate", duration: 1 }}
        viewport={{ once: true }}
      >
        <h1
          key={currentLanguage + "-services-h1"}
          className="tools-section-texts-title section-title"
        >
          {currentLanguage === "en"
            ? "My favorite 🧰 tools"
            : "Mes outils 🧰 favoris"}
        </h1>
        <p
          key={currentLanguage + "-services-p"}
          className="tools-section-texts-description"
        >
          {currentLanguage === "en"
            ? "An overview of my full-stack stack, including the frontend and backend technologies I use to build complete and high-performance applications."
            : "Une présentation de ma stack full-stack, incluant les technologies frontend et backend que j’utilise pour développer des applications complètes et performantes."}
        </p>
      </motion.div>

      <motion.div
        className="tools-section-grid tools-grid"
        initial={{ opacity: 0, translateY: "2rem" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ ease: "anticipate", duration: 1, delay: 0.5 }}
        onAnimationComplete={() => setGridAnimationDone(true)}
        viewport={{ once: true }}
      >
        {projectsList.map(service => (
          <ServiceCard service={service} delay={gridAnimationDone ? 0 : 1}/>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
