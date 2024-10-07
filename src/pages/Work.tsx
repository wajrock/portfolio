import React, { FunctionComponent, useEffect } from "react";
import FooterSection from "../sections/FooterSection";
import {useLocation, useParams } from "react-router-dom";
import "./Work.scss";
import Header from "../component/Header/Header";
import Pill from "../component/Pill/Pill";
import { useLanguage } from "src/LanguageContext";
import projectsList from "../texts.json"
import ProjectCard from "src/component/ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Work: FunctionComponent = () => {
  const { projectId } = useParams<string>();
  const {currentLanguage} = useLanguage();
  const location = useLocation();

  const projectData = currentLanguage && projectsList[currentLanguage].find(p => p.id === projectId)

  useEffect(() => {
    document.title = projectData?.["title-page"]!
  }, [projectData]);

  useEffect(()=>{
    location.state && location.state.loadTop && window.scrollTo(0,0);
  },[location.state])
  

  return (
      <div className="work-page-wrap">
        <Header/>
          <main className="content-project">
          <div className="hero-project">
            <motion.div initial={{opacity: 0,translateY:'50%'}} whileInView={{opacity: 1,translateY:'0'}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}} className="hero-project-tags" >
              {projectData?.tags.map(tag => (
                <Pill tag haveIcon={false} text={tag} />
              ))}
            </motion.div>

            <motion.div initial={{opacity: 0,translateY:'50%'}} whileInView={{opacity: 1,translateY:'0'}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}} className="hero-project-texts">
              <h2 className="hero-project-texts-name">{projectData?.name}</h2>
              <h2 className="hero-project-texts-title">
                {projectData?.["title-project"]}
              </h2>
            </motion.div>

            <motion.div initial={{opacity: 0,translateY:'50%'}} whileInView={{opacity: 1,translateY:'0'}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}} className="hero-project-links">
              {projectData?.links.map(link => (
                 <a
                 href="https://www.figma.com/community/file/1401986177194596437/green-fits-identity"
                 target="_blank"
                 rel="noreferrer noopener"
                 className="hero-project-links-item"
               >
                 <Pill 
                  haveIcon={false} 
                  text={link.type === "github" ? "View more on Github" : (link.type === "figma" ? "View more on Figma" : "Live demo")} 
                  haveHover 
                  />
               </a>
              ))}
             
            </motion.div>
          </div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease:"anticipate",duration: 1,delay:.25}} viewport={{once:true}} className={"content-project-cover " + projectId}>
                <img
                  src={`${process.env.PUBLIC_URL}/projects/${projectData?.image}`}
                  alt=""
                />
            </motion.div>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease:"anticipate",duration: 1}} viewport={{once:true}} className="content-project-paragraph">
              {
                projectData?.description!.map(paragraph => (
                  <p>{paragraph}</p>
                ))
              }
            </motion.div>
          </main>

        <div className="other-projects">
          <p className="other-projects-title">{currentLanguage === "en" ? "Check out my other projects" : "Découvrez mes autres projets"}</p>
          <div className="other-projects-grid">
          {projectsList[currentLanguage!].filter(p => p.id !== projectData?.id).map((project,index) => (
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ease:"anticipate",duration: 1,delay:.15*index}} viewport={{once:true}}>
                <ProjectCard project={project} additionalClass={index === 0 ? ["first-child"]: (index === projectsList[currentLanguage!].filter(p => p.id !== projectData?.id).length-1 ? ["last-child"]: [])}/>
            </motion.div>
           
          ))}
          </div>
    
        </div>

        <FooterSection id="contact"/>
      </div>
  );
};

export default Work;
