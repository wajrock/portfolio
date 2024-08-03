import React, { FunctionComponent, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import ServicesSection from "../sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";
import { Navigate, useLocation } from "react-router-dom";


const HomEN: FunctionComponent = () => {

  const loc = useLocation()

  const { hash } = useLocation();

  // useEffect(() => {
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [hash]);
  
  return (
    <div>
        <HeroSection id="hero" lang="en"/>
        <p>{loc.pathname}</p>
        <AboutSection id="about" lang="en"/>
        <ServicesSection id="skills" lang="en"/>
        <ToolsSection id="tools" lang="en"/>
        <ProjectsSection id="work" lang="en"/>
        <FooterSection id="contact" lang="en"/>
        
    </div>
  );
};

export default HomEN;
