import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./Hero.scss";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import Pill from "../component/Pill/Pill";
import MainButton from "../component/MainButton/MainButton";
import Carousel from "../component/Carousel/Carousel";

const HeroSection: FunctionComponent<{ id: string; lang: string }> = ({
  id,
  lang,
}) => {
  const pillRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pillRef.current?.classList.add("animate");

    setTimeout(() => {
      textsRef.current?.classList.add("animate");
    }, 300);

    setTimeout(() => {
      buttonRef.current?.classList.add("animate");
    }, 700);
  }, []);

  return (
    <div className="hero-section" id={id}>
      <div className="fixed">
        <Banner lang={lang} />
        <Header lang={lang} />
      </div>

      <div className="content">
        <Pill
          haveIcon
          text={lang === "en" ? ("Available for work") : ("Disponible")}
          haveHover={false}
          myref={pillRef}
        />
        <div ref={textsRef} className="texts">
          <h1>{lang === "en" ? ("I design and code solutions for you and your brand.") : ("Je design et code des solutions pour vous et votre marque.")}</h1>
          
          
          {lang === "en" ? (<p>
            Currently, in Engineering School specializing in information
            systems, I can design your idea and bring it to life.
          </p>)

          : (<p>
            Actuellement en école d'ingénieur spécialisé en systèmes d'information, je peux concevoir votre idée et la concrétiser.
          </p>)}

        </div>

        <MainButton myref={buttonRef} lang={lang}/>
      </div>

      <Carousel lang={lang}/>
    </div>
  );
};

export default HeroSection;
