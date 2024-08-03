import React, { FunctionComponent, useEffect, useRef } from "react";
import "./About.scss";
import useOnScreen from "../Functions";
import Pill from "../component/Pill/Pill";

const AboutSection: FunctionComponent<{ id: string; lang: string }> = ({id,lang,}) => {

  const columnsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLImageElement>(null)
  const containerVisible = useOnScreen(containerRef)
  const columnsVisible = useOnScreen(columnsRef)

  useEffect(()=>{
    if (columnsVisible && !columnsRef.current?.classList.contains('animate')){
      columnsRef.current?.classList.add("animate");
    }

  },[columnsVisible])

  useEffect(()=>{
    if (containerVisible && !containerRef.current?.classList.contains('animate')){
      containerRef.current?.classList.add("animate");
    }

  },[containerVisible])

  
  
  return (
    <div className="about-section" id={id}>
      <div className="grey-container" >
        <div className="whoami">
          <div className="whoami-texts">
            <h1>{lang === "en" ? ("More about me") : ("A propos de moi")}</h1>
            
            {lang === "en" ? (<p>
              I am a 21-year-old third-year student in higher education, dedicated to combining my two greatest passions—design and programming—to serve those seeking functional and user-friendly tools.
            </p>):(<p>
              Je suis un étudiant de 21 ans en troisième année d'enseignement supérieur, dédié à combiner mes deux plus grandes passions le design et la programmation,pour servir ceux qui recherchent des outils fonctionnels et conviviaux.
            </p>)}

            {lang === "en" ? (<p>
            I am continuously seeking out the best design opportunities and relentlessly working to enhance my creations. My goal is to produce work that is not only aesthetically compelling but also highly functional and innovative.
            </p>):(<p>
              Je suis constamment à la recherche des meilleures opportunités de design et je travaille sans relâche pour améliorer mes créations. Mon objectif est de produire un travail non seulement esthétiquement attrayant, mais aussi hautement fonctionnel et innovant.
            </p>)}

            {lang === "en" ? (<p>
            With an insatiable thirst for knowledge, I am always eager to explore the latest features and programming languages. This perpetual curiosity enables me to stay current with industry trends and integrate modern techniques into my projects.
            </p>):(<p>
              Avec une soif insatiable de connaissance, je suis toujours avide d'explorer les dernières fonctionnalités et les langages de programmation. Cette curiosité perpétuelle me permet de rester à jour avec les tendances de l'industrie et d'intégrer des techniques modernes dans mes projets.
            </p>
            )}
          </div>

          <div className="whoami-memoji" >
              <img src="memoji.png" alt="" ref={containerRef}/>
              <div className="whoami-memoji-overlay"></div>
          </div>
          
        </div>
      </div>

      <div className="infos-columns" ref={columnsRef}>
        <div className="infos-columns-item" >
          <div className="infos-columns-item-texts">
            <div className="infos-columns-item-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"/></svg>
              <p>LinkedIn</p>
            </div>
            <p className="infos-columns-item-description">{lang === "en" ? "Connect with me on LinkedIn to discover my profesionnal news.":"Découvrez mes actualités professionnelles sur LinkedIn."}</p>
          </div>
          <a href="https://linkedin.com/in/wajrock" target="_blank" rel="noopener noreferrer"><Pill text={lang === "en" ? "Discover" : "Découvrir"} haveIcon={false} haveHover/></a>
        </div>

        <div className="infos-columns-separator"></div>

        <div className="infos-columns-item">
          <div className="infos-columns-item-texts">
            <div className="infos-columns-item-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
              <p>Github</p>
            </div>
            <p className="infos-columns-item-description">{lang === "en" ? "Explore my GitHub to see my programmation projects.":"Explorez mes projets de programmation sur Github."}</p>
          </div>
          <a href="https://github.com/wajrock" target="_blank" rel="noopener noreferrer"><Pill text={lang === "en" ? "Discover" : "Découvrir"}  haveIcon={false} haveHover/></a>
        </div>

        <div className="infos-columns-separator"></div>

        <div className="infos-columns-item">
          <div className="infos-columns-item-texts">
            <div className="infos-columns-item-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity="0.6"/><path fill="currentColor" d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z" opacity="0.4"/><path fill="currentColor" d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"/><path fill="currentColor" d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334" opacity="0.2"/><path fill="currentColor" d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z" opacity="0.8"/></svg>
              <p>Figma</p>
            </div>
            <p className="infos-columns-item-description">{lang === "en" ? "Check out my Figma to discover my design projects.":"Découvrez mes projets de design sur mon Figma."}</p>
          </div>
          <a href="https://figma.com/@wajrock" target="_blank" rel="noopener noreferrer"><Pill text={lang === "en" ? "Discover" : "Découvrir"}  haveIcon={false} haveHover/></a>
        </div>
      </div>
      
      
        
    </div>
  );
};

export default AboutSection;
