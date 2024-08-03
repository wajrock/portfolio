import React, { FunctionComponent, useEffect, useRef } from "react";
import "./Projects.scss";
import Pill from "../component/Pill/Pill";
import useOnScreen from "../Functions";
import { Link } from "react-router-dom";

const ProjectsSection: FunctionComponent<{ id: string; lang: string }> = ({id,lang,}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const firstRowRef1 = useRef<HTMLDivElement>(null);
  const firstRowRef2 = useRef<HTMLDivElement>(null);
  const secondRowRef1 = useRef<HTMLDivElement>(null);
  const secondRowRef2 = useRef<HTMLDivElement>(null);

  const headerIsVisible = useOnScreen(headerRef);
  const firstRowIsVisible = useOnScreen(firstRowRef1);
  const secondRowIsVisible = useOnScreen(secondRowRef1);

  useEffect(() => {
    if (headerIsVisible && !headerRef.current?.classList.contains("animate")) {
      headerRef.current?.classList.add("animate");
    }
  }, [headerIsVisible]);

  useEffect(() => {
    if (
      firstRowIsVisible &&
      !firstRowRef1.current?.classList.contains("animate")
    ) {
      firstRowRef1.current?.classList.add("animate");
      firstRowRef2.current?.classList.add("animate");
    }

    if (
      secondRowIsVisible &&
      !secondRowRef1.current?.classList.contains("animate")
    ) {
      secondRowRef1.current?.classList.add("animate");
      secondRowRef2.current?.classList.add("animate");
    }
  }, [firstRowIsVisible, secondRowIsVisible]);
  
  return (
    <div className="projects-section" id={id}>
      <h1 className="projects-section-title" ref={headerRef}>
        Best of the best <span>{lang === "en" ? "My selected 📂 projects" : "Mes projets 📂 favoris"}</span>
      </h1>
      <div className="grid-projects">
        <Link to={lang === "en" ? "/en/project/grades-app" : "/fr/projet/app-notes"}>
          <div className="grid-projects-item" ref={firstRowRef1}>
            <div className="grid-projects-item__cover project1"></div>
            <div className="grid-projects-item__description">
              <p>{lang === "en" ? ("Grades management app") : ("Application de gestion de notes")}</p>
              <p>2024</p>
            </div>
          </div>
        </Link>

        <Link to={lang === "en" ? "project/green-fit" : "projet/green-fit"}>
          <div className="grid-projects-item" ref={secondRowRef1}>
            <div className="grid-projects-item__cover project3"></div>
            <div className="grid-projects-item__description">
              <p>{lang === "en" ? ("GreenFit Brand Identity") : ("Identé de marque pour GreenFit")}</p>
              <p>2023</p>
            </div>
          </div>
        </Link>

        

        <Link to={lang === "en" ? "project/portfolio" : "projet/portfolio"}>
          <div className="grid-projects-item" ref={firstRowRef2}>
            <div className="grid-projects-item__cover project2"></div>
            <div className="grid-projects-item__description">
              <p>{lang === "en" ? ("React Portfolio") : ("Portfolio en React")}</p>
              <p>2024</p>
            </div>
          </div>
        </Link>

        <Link to={lang === "en" ? "project/keops" : "projet/keops"}>
          <div className="grid-projects-item" ref={secondRowRef2}>
            <div className="grid-projects-item__cover project4"></div>
            <div className="grid-projects-item__description">
              <p>{lang === "en" ? ("2D Python quests game") : ("Jeu de quêtes Python en 2D")}</p>
              <p>2023</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
