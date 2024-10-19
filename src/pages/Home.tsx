import React, { FunctionComponent, useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "src/sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";
import Header from "src/component/Header/Header";
import { useLocation } from "react-router-dom";


const Home: FunctionComponent = () => {
  const location = useLocation();
  useEffect(()=>{
    location.state && location.state.loadTop && window.scrollTo(0,0);
  },[location.state])

  useEffect(()=>{
    if (location.hash){
      const tag = location.hash.split('#')[1]!;
      document.getElementById(tag)?.scrollIntoView()
    }
  },[location])

  useEffect(()=>{
    document.title = "Thibaud Wajrock"
  },[])
  
  return (
    <div>
        <Header/>
        <HeroSection id="hero"/>
        <AboutSection id="about"/>
        <ServicesSection id="skills" />
        <ProjectsSection id="works"/>
        <FooterSection id="contact"/>
        
    </div>
  );
};

export default Home;
