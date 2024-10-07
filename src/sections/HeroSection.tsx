import React, { FunctionComponent } from "react";
import "./Hero.scss";
import Pill from "../component/Pill/Pill";
import MainButton from "../component/MainButton/MainButton";
import Carousel from "../component/Carousel/Carousel";
import { useLanguage } from "src/LanguageContext";
import { motion } from "framer-motion";

const HeroSection: FunctionComponent<{ id: string }> = ({ id }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="hero-section" id={id}>
      <div className="content">
        <motion.div
          initial={{ opacity: 0, translateY: "50%" }}
          animate={{ opacity: 1, translateY: "0" }}
          transition={{ ease: "anticipate", duration: 1 }}
          viewport={{ once: true }}
        >
          <Pill
            haveIcon
            text={
              currentLanguage === "en"
                ? "Looking for internship"
                : "Recherche d'un stage"
            }
            haveHover={false}
          />
        </motion.div>

        <div className="texts">
          <div className="title">
            <motion.h2
              initial={{ opacity: 0, translateY: "50%" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ ease: "anticipate", duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Thibaud Wajrock
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, translateY: "50%" }}
              animate={{ opacity: 1, translateY: "0" }}
              transition={{ ease: "anticipate", duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {currentLanguage === "en"
                ? "Full-Stack Engineer Student"
                : "Etudiant Ingénieur Full-Stack"}
            </motion.h1>
          </div>

          <motion.p
            className="p"
            initial={{ opacity: 0, translateY: "50%" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{ ease: "anticipate", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {currentLanguage === "en"
              ? " I'm an Engineering student specializing in Information Systems, looking for an 8-week internship in web development during June/July or August/September. I'm ready to apply my skills in designing and developing functional solutions."
              : "Étudiant en École d'Ingénieur, spécialisé en Systèmes d'Information, je cherche un stage de 8 semaines en développement web, disponible en juin/juillet ou août/septembre. Prêt à mettre mes compétences en conception et développement au service de votre équipe."}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: "50%" }}
          animate={{ opacity: 1, translateY: "0" }}
          transition={{ ease: "anticipate", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <MainButton />
        </motion.div>
      </div>

      <Carousel />
    </div>
  );
};

export default HeroSection;
