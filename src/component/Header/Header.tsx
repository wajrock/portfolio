import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "src/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  const {openPopupLanguage} = useLanguage();

  useEffect(() => {
    const handleClickOutsidePopup = (event: MouseEvent) => {
      if (
        menuOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutsidePopup);
    }, 0);

    return () => {
      clearTimeout(timeoutId); // Nettoyer le timeout au démontage
      document.removeEventListener("click", handleClickOutsidePopup);
    };
  }, [popupRef, menuOpen]);

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ ease: "anticipate", duration: 1 }}
      viewport={{ once: true }}
      className={"header"}
    >
      <div className="header__left">
        <Link to="/" state={{ loadTop: true }}>
          <h1>Thibaud Wajrock</h1>
        </Link>
        <Navbar />
      </div>

      <div className="header__right">
      <Button />
        <LanguageSwitcher />
        
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#1E1E1E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="18" height="10" viewBox="0 0 18 10">
              <path
                d="M0 1a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H1A1 1 0 0 1 0 1z"
                fill="black"
              />
              <path
                d="M0 9a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H1A1 1 0 0 1 0 9z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className={`phone-menu ${openPopupLanguage ? "language-popup-open" : ""}`} ref={popupRef}>
          <Navbar />
          <div className="phone-menu-actions">
            <LanguageSwitcher />
            <Button />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Header;
