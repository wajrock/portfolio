import React, { FunctionComponent, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import ServicesSection from "../sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";
import { useLocation } from "react-router-dom";

const HomeFR: FunctionComponent = () => {

  const loc = useLocation();

  const scroll = loc.state?.scroll || false;

  useEffect(() => {
    document.title = 'Home | Thibaud Wajrock';
    if (loc.hash || scroll){
      const element = document.getElementById(loc.hash.substring(1));
      element?.scrollIntoView();
    }
    
  }, [loc,scroll]);
  
  return (
    <div>
        <HeroSection id="hero" lang="fr"/>
        <AboutSection id="about" lang="fr"/>
        <ServicesSection id="skills" lang="fr"/>
        <ToolsSection id="tools" lang="fr"/>
        <ProjectsSection id="work" lang="fr"/>
        <FooterSection id="contact" lang="fr"/>
        
    </div>
  );
};

export default HomeFR;
