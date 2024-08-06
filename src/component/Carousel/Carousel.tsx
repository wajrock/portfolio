import React, { FunctionComponent, useEffect, useRef } from "react";
import "./Carousel.scss";
import useOnScreen from "../../Functions";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollTo";

const Carousel: FunctionComponent<{lang:string}> = ({lang}) => {
  const firstImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);
  const thirdImageRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);

  const carousel = useRef<HTMLDivElement>(null);

  const carouselIsVisible = useOnScreen(carousel);

  useEffect(() => {
    if (
      carouselIsVisible &&
      !firstImageRef.current?.classList.contains("animate")
    ) {
      firstImageRef.current?.classList.add("animate");
      setTimeout(() => {
        secondImageRef.current?.classList.add("animate");

        setTimeout(() => {
          thirdImageRef.current?.classList.add("animate");

          setTimeout(() => {
            lastImageRef.current?.classList.add("animate");
          }, 500);
        }, 500);
      }, 500);
    }
  }, [carouselIsVisible]);

  return (
    <div className="carousel" ref={carousel}>
      <Link to={lang === "en" ? "project/grades-app" : "projet/app-notes"} onClick={ScrollToTop}> 
        <div className="carousel-item" ref={firstImageRef}>
          <div className="carousel-item__cover project1"></div>
          <div className="carousel-item__description">
            <p>{lang === "en" ? ("Grades management app") : ("Application de gestion de notes")}</p>
            <p>2024</p>
          </div>
        </div>
      </Link>
      
      <Link to={lang === "en" ? "project/green-fit" : "projet/green-fit"} onClick={ScrollToTop}>
        <div className="carousel-item" ref={thirdImageRef}>
          <div className="carousel-item__cover project3"></div>
          <div className="carousel-item__description">
            <p>{lang === "en" ? ("GreenFit Brand Identity") : ("Identé de marque pour GreenFit")}</p>
            <p>2023</p>
          </div>
        </div>
      </Link>

      

      <Link to={lang === "en" ? "project/portfolio" : "projet/portfolio"} onClick={ScrollToTop}>
        <div className="carousel-item" ref={secondImageRef}>
          <div className="carousel-item__cover project2"></div>
          <div className="carousel-item__description">
            <p>{lang === "en" ? ("React Portfolio") : ("Portfolio en React")}</p>
            <p>2024</p>
          </div>
        </div>
      </Link>

      <Link to={lang === "en" ? "project/keops" : "projet/keops"} onClick={ScrollToTop}>
        <div className="carousel-item" ref={lastImageRef}>
          <div className="carousel-item__cover project4"></div>
          <div className="carousel-item__description">
            <p>{lang === "en" ? ("2D Python quests game") : ("Jeu de quêtes Python en 2D")}</p>
            <p>2023</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Carousel;