import React, { FunctionComponent, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import ServicesSection from "../sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";
import { Navigate, useLocation } from "react-router-dom";


const HomEN: FunctionComponent = () => {
  
  return (
    <div>
        
        <HeroSection id="hero" lang="en"/>
        <AboutSection id="about" lang="en"/>
        <ServicesSection id="skills" lang="en"/>
        <ToolsSection id="tools" lang="en"/>
        <ProjectsSection id="work" lang="en"/>
        <FooterSection id="contact" lang="en"/>
        
    </div>
  );
};

export default HomEN;
