import React, { FunctionComponent } from "react";
import "./Footer.scss";
import MainButton from "../component/MainButton/MainButton";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "src/LanguageContext";

const FooterSection: FunctionComponent<{ id: string}> = ({
  id
}) => {
  const {currentLanguage} = useLanguage();

  return (
    <div className="footer-section" id={id}>
      <div className="footer-section-container">
        <img
          src={`${process.env.PUBLIC_URL}/grid.png`}
          alt=""
          className="footer-section-container-overlay"
        />
        <div className="footer-section-container-texts">
          <h2 className="footer-section-container-texts-title">
            {currentLanguage === "en"
              ? "Questions or Collaboration ?"
              : "Questions ou collaboration ?"}
          </h2>
          <p className="footer-section-container-texts-description">
            {currentLanguage === "en"
              ? "Email me to discuss any questions or potential projects. I’d love to connect !"
              : "Envoyez-moi un e-mail pour discuter de vos questions ou de projets potentiels. J'aimerais beaucoup échanger avec vous !"}
          </p>
        </div>
        <MainButton />
      </div>

      <div className="footer-section-content">
        
        <div className="footer-section-content-links">
          <div className="footer-section-content-links-pages">
            <HashLink smooth to={"#about"}>
              {currentLanguage === "en" ? <p>About</p> : <p>A propos</p>}
            </HashLink>

            <HashLink smooth to={"#skills"}>
              {currentLanguage === "en" ? <p>Skills</p> : <p>Compétences</p>}
            </HashLink>


            <HashLink smooth to={"#works"}>
              {currentLanguage === "en" ? <p>Works</p> : <p>Projets</p>}
            </HashLink>
          </div>
          <div className="footer-section-content-links-socials">
            <a href="https://linkedin.com/in/wajrock" target="_blank" rel="noreferrer noopener">
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/wajrock" target="_blank" rel="noreferrer noopener">
              <p>Github</p>
            </a>
            <a href="https://figma.com/@wajrock" target="_blank" rel="noreferrer noopener">
              <p>Figma</p>
            </a>
          </div>
        </div>

        <p className="footer-section-content-copyright">
          © ️2024 - Thibaud Wajrock
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
