import React, { FunctionComponent } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import ServicesSection from "../sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";

const HomeFR: FunctionComponent = () => {
  
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
