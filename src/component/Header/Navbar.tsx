import React from "react";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "src/LanguageContext";

const Navbar = () => {
    const {currentLanguage} = useLanguage();

  return (
    <nav className="navbar-wrap">
      <HashLink to={"/#about"}>
        {currentLanguage === "en" ? <p>About</p> : <p>A propos</p>}
      </HashLink>
      <HashLink
        to={"/#skills"}
      >
        {currentLanguage === "en" ? <p>Skills</p> : <p>Compétences</p>}
      </HashLink>
      <HashLink to={"/#works"}>
        {currentLanguage === "en" ? <p>Works</p> : <p>Projets</p>}
      </HashLink>
      <HashLink
        to={"/#contact"}
      >
        <p>Contact</p>
      </HashLink>
    </nav>
  );
};

export default Navbar;
