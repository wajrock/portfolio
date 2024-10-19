import React, { FunctionComponent, useEffect, useRef } from "react";
import FooterSection from "../sections/FooterSection";
import { useLocation, useParams } from "react-router-dom";
import "./Work.scss";
import Header from "../component/Header/Header";
import Pill from "../component/Pill/Pill";
import { useLanguage } from "src/LanguageContext";
import projectsList from "../texts.json";
import ProjectCard from "src/component/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Work: FunctionComponent = () => {
  const { projectId } = useParams<string>();
  const { currentLanguage } = useLanguage();
  const location = useLocation();
  const carouselImagesRef = useRef<HTMLDivElement>(null);
  const carouselProjectsRef = useRef<HTMLDivElement>(null);

  const projectData =
    currentLanguage &&
    projectsList[currentLanguage].find((p) => p.id === projectId);

  useEffect(() => {
    document.title = projectData?.["title-page"]!;
  }, [projectData]);

  useEffect(() => {
    if (location.state && location.state.loadTop){
      window.scrollTo(0, 0);
      if (carouselImagesRef.current){
        carouselImagesRef.current.scrollTo({left:0})
      }
      if (carouselProjectsRef.current){
        carouselProjectsRef.current.scrollTo({left:0})
      }
      
    }
    
  }, [location.state]);

  return (
    <div className="work-page-wrap">
      <Header />
      <main className="project-details">

      
      <div className="project-details-hero">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 1 }}
          viewport={{ once: true }}
          className="project-details-hero-tags"
        >
          {projectData?.tags.map((tag) => (
            <Pill tag haveIcon={false} text={tag} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 1, delay: 0.15 }}
          viewport={{ once: true }}
          className="project-details-hero-texts"
        >
          <h2 className="project-details-hero-texts-name">{projectData?.name}</h2>
          <h2 className="project-details-hero-texts-title">
            {projectData?.["title-project"]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "anticipate", duration: 1, delay: 0.25 }}
          viewport={{ once: true }}
          className="project-details-hero-links"
        >
          {projectData?.links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
              className="project-details-hero-links-item"
            >
              <Pill
                haveIcon={false}
                text={
                  link.type === "github"
                    ? "View more on Github"
                    : link.type === "figma"
                    ? "View more on Figma"
                    : "Live demo"
                }
                haveHover
              />
            </a>
          ))}
        </motion.div>
      </div>
      <motion.section
        className={"project-details-images " + projectId}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "anticipate", duration: 1, delay: 0.25 }}
        viewport={{ once: true }}
        ref={carouselImagesRef}
      >
        {projectData?.images.map(image => (
        <img
            src={`${process.env.PUBLIC_URL}/projects/${projectData?.id}/${image}`}
            alt=""
          />
         
        ))}
      
      </motion.section>
      <section className="project-details-content">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "anticipate", duration: 1 }}
                viewport={{ once: true }}
                className="project-details-content-paragraph"
              >
                {projectData?.description.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </motion.div>
      </section>

      </main>

      <div className="other-projects">
        <p className="other-projects-title">
          {currentLanguage === "en"
            ? "Check out my other projects"
            : "Découvrez mes autres projets"}
        </p>
        <div className="other-projects-grid" ref={carouselProjectsRef}>
          {projectsList[currentLanguage!]
            .filter((p) => p.id !== projectData?.id)
            .map((project, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: "anticipate",
                  duration: 1,
                  delay: 0.15 * index,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={project}
                  additionalClass={
                    index === 0
                      ? ["first-child"]
                      : index ===
                        projectsList[currentLanguage!].filter(
                          (p) => p.id !== projectData?.id
                        ).length -
                          1
                      ? ["last-child"]
                      : []
                  }
                />
              </motion.div>
            ))}
        </div>
      </div>

      <FooterSection id="contact" />
    </div>
  );
};

export default Work;
