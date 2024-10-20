import React from "react";
import { useLanguage } from "src/LanguageContext";
import "./Button.scss"

const Button = () => {
  const { currentLanguage } = useLanguage();
  return (
    <a
      href={`${process.env.PUBLIC_URL}/WAJROCK_THIBAUD_RESUME_${currentLanguage?.toUpperCase()}.pdf`}
      target="_blank"
      className="button-wrap"
      rel="noreferrer"
    >
        {currentLanguage === "en" ? <p>Get my CV</p> : <p>Voir mon CV</p>}
    </a>
  );
};

export default Button;
