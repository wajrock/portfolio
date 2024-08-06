import React, { FunctionComponent, useEffect, useRef } from "react";
import "./Footer.scss";
import MainButton from "../component/MainButton/MainButton";
import useOnScreen from "../Functions";
import { Link } from "react-router-dom";

const FooterSection: FunctionComponent<{id:string,lang:string}> = ({id,lang}) => {

  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null)

  const imageisVisible = useOnScreen(imageRef)

    useEffect(()=>{
        if (imageisVisible && !imageRef.current?.classList.contains('animate')){
          imageRef.current?.classList.add("animate")
        }

    },[imageisVisible])
  
  return (
    <div className="footer-section" id={id}>
        <div className="footer-section-container">
            <img src={`${process.env.PUBLIC_URL}/grid.png`}  alt="" className="footer-section-container-overlay" ref={imageRef}/>
            <div className="footer-section-container-texts">
                <h2 className="footer-section-container-texts-title">{lang === "en" ? ("Questions or Collaboration ?") : ("Questions ou collaboration ?")}</h2>
                <p className="footer-section-container-texts-description">{lang === "en" ? ("Email me to discuss any questions or potential projects. I’d love to connect !") : ("Envoyez-moi un e-mail pour discuter de vos questions ou de projets potentiels. J'aimerais beaucoup échanger avec vous !")}</p>
            </div>
            <MainButton myref={ref} lang={lang}/>
        </div>

        <div className="footer-section-content">
          <p className="footer-section-content-copyright">© ️2024 - Thibaud Wajrock</p>
          <div className="footer-section-content-links">
            <div className="footer-section-content-links-pages">
              <Link to={"/"+lang+"/#about"} state={{scroll:true}}>
              {lang === "en" ? (<p>About</p>) : (<p>A propos</p>)}
              </Link>
              <Link to={"/"+lang+"/#skills"} state={{scroll:true}}>
                {lang === "en" ? (<p>Skills</p>) : (<p>Compétences</p>)}
              </Link>
              <Link to={"/"+lang+"/#work"} state={{scroll:true}}>
              {lang === "en" ? (<p>Works</p>) : (<p>Projets</p>)}
                
              </Link>
              <Link to={"/"+lang+"/#contact"} state={{scroll:true}}>
                <p>Contact</p>
              </Link>
                
            </div>
            <div className="footer-section-content-links-socials">
                <a href="https://linkedin.com/in/wajrock" target="_blank"><p>LinkedIn</p></a>
                <a href="https://github.com/wajrock" target="_blank"><p>Github</p></a>
                <a href="https://figma.com/@wajrock" target="_blank"><p>Figma</p></a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FooterSection;
