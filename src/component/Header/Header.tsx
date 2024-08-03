import React, { FunctionComponent, useState } from "react";
import "./Header.scss";
import { Fragment } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useLocation } from "react-router-dom";

const Header: FunctionComponent<{ lang: string }> = ({ lang }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const linksFR: { [key: string]: string } = {
    "/fr/":"/en/",
    "/fr/projet/app-notes": "/en/project/grades-app",
    "/fr/projet/green-fit": "/en/project/green-fit",
    "/fr/projet/portfolio": "/en/project/portfolio",
    "/fr/projet/keops": "/en/project/keops",
  };
  const linksEN: { [key: string]: string } = {
    "/en/":"/fr/",
    "/en/project/grades-app":"/fr/projet/app-notes",
    "/en/project/green-fit":"/fr/projet/green-fit",
    "/en/project/portfolio":"/fr/projet/portfolio",
    "/en/project/keops":"/fr/projet/keops",
    
  };

  return (
    <div className="header">
      <div className="header__left">
        <a href="#/">
          <h1>Thibaud Wajrock</h1>
        </a>
        <nav>
          <a href={"#/" + lang + "/#about"}>
            {lang === "en" ? (<p>About</p>) : (<p>A propos</p>)}
          </a>
          <a href={"#/" + lang + "/#skills"}>
            {lang === "en" ? (<p>Skills</p>) : (<p>Compétences</p>)}
          </a>
          <a href={"#/" + lang + "/#work"}>
          {lang === "en" ? (<p>Works</p>) : (<p>Projets</p>)}
            
          </a>
          <a href={"#/" + lang + "/#contact"}>
            <p>Contact</p>
          </a>
        </nav>
      </div>

      <div className="header__right">
        <a href="/#/resume.pdf" target="_blank" className="cta">
          <div className="get-resume">
            {lang === "en" ? (<p>Get my CV</p>) : (<p>Voir mon CV</p>)}
          </div>
        </a>

        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
            >
              <path
                d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1Z"
                fill="black"
              />
              <path
                d="M0 9C0 8.44772 0.447715 8 1 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H1C0.447716 10 0 9.55228 0 9Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="phone-menu">
          <div className="phone-menu-links">
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </div>
          <div className="phone-menu-details">
            <a href="https://esir.fr" target="_blank" rel="noopener noreferrer">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.83399 6.66701C9.83399 7.68001 9.01299 8.50102 7.99999 8.50102C6.98799 8.50102 6.16699 7.68001 6.16699 6.66701C6.16699 5.65401 6.98799 4.83401 7.99999 4.83401C9.01299 4.83401 9.83399 5.65401 9.83399 6.66701Z"
                    stroke="#71717A"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.834 6.66701C12.834 9.70301 10.117 12.456 8.75699 13.643C8.32499 14.026 7.67499 14.026 7.24299 13.643C5.88299 12.455 3.16699 9.70301 3.16699 6.66701C3.16699 3.99801 5.33099 1.83401 7.99999 1.83401C10.67 1.83401 12.834 3.99801 12.834 6.66701Z"
                    stroke="#71717A"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Rennes,France</p>
              </div>
            </a>

            <a href="mailto:thibaud.wajrock@icloud.com">
              <div className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.416 5.29999V10.7H14.916V5.29999H13.416ZM12.033 12.083H3.96601V13.583H12.033V12.083ZM2.58301 10.7V5.29999H1.08301V10.7H2.58301ZM3.96601 3.91699H12.033V2.41699H3.96601V3.91699ZM3.96601 12.083C3.58101 12.083 3.33601 12.083 3.15201 12.068C2.97601 12.053 2.92001 12.03 2.90101 12.02L2.22101 13.356C2.48601 13.492 2.76101 13.541 3.03001 13.563C3.29001 13.583 3.60501 13.583 3.96601 13.583V12.083ZM1.08301 10.7C1.08301 11.061 1.08301 11.377 1.10301 11.637C1.12601 11.905 1.17501 12.18 1.31001 12.446L2.64701 11.765C2.63701 11.745 2.61301 11.691 2.59901 11.515C2.58401 11.244 2.57901 10.972 2.58301 10.7H1.08301ZM2.90101 12.02C2.79101 11.964 2.70301 11.875 2.64701 11.765L1.31001 12.445C1.51001 12.838 1.83001 13.156 2.22101 13.356L2.90101 12.02ZM13.416 10.7C13.416 11.086 13.416 11.33 13.401 11.515C13.386 11.691 13.363 11.745 13.353 11.765L14.689 12.445C14.811 12.192 14.881 11.917 14.896 11.637C14.916 11.377 14.916 11.061 14.916 10.7H13.416ZM12.033 13.583C12.394 13.583 12.71 13.583 12.97 13.563C13.251 13.548 13.526 13.478 13.779 13.356L13.098 12.02C13.078 12.03 13.024 12.053 12.848 12.068C12.663 12.083 12.418 12.083 12.033 12.083V13.583ZM13.353 11.765C13.297 11.875 13.208 11.964 13.098 12.02L13.778 13.356C14.171 13.156 14.489 12.838 14.689 12.446L13.353 11.765ZM14.916 5.29999C14.916 4.93899 14.916 4.62299 14.896 4.36299C14.881 4.08199 14.811 3.80699 14.689 3.55399L13.353 4.23499C13.363 4.25499 13.386 4.30899 13.401 4.48499C13.416 4.66999 13.416 4.91499 13.416 5.29999H14.916ZM12.033 3.91699C12.419 3.91699 12.663 3.91699 12.848 3.93199C13.024 3.94699 13.078 3.96999 13.098 3.97999L13.778 2.64399C13.525 2.52199 13.25 2.45199 12.97 2.43699C12.71 2.41699 12.394 2.41699 12.033 2.41699V3.91699ZM14.689 3.55399C14.489 3.16199 14.171 2.84399 13.779 2.64399L13.098 3.97999C13.208 4.03599 13.297 4.12499 13.353 4.23499L14.689 3.55499V3.55399ZM2.58301 5.29999C2.58301 4.91399 2.58301 4.66999 2.59901 4.48499C2.61301 4.30899 2.63701 4.25499 2.64701 4.23499L1.31001 3.55499C1.17501 3.81999 1.12601 4.09499 1.10401 4.36299C1.08201 4.62299 1.08301 4.93899 1.08301 5.29999H2.58301ZM3.96601 2.41699C3.60601 2.41699 3.28901 2.41699 3.03001 2.43699C2.74901 2.45099 2.47401 2.52199 2.22101 2.64399L2.90201 3.97999C2.92101 3.96999 2.97601 3.94699 3.15201 3.93199C3.33601 3.91699 3.58101 3.91699 3.96601 3.91699V2.41699ZM2.64601 4.23499C2.70201 4.12499 2.79201 4.03599 2.90201 3.97999L2.22101 2.64399C1.82901 2.84399 1.50901 3.16199 1.31001 3.55399L2.64601 4.23499ZM7.63001 7.39499L2.47501 3.17699L1.52501 4.33799L6.68001 8.55599L7.63001 7.39599V7.39499ZM13.525 3.17699L8.36902 7.39499L9.31902 8.55599L14.475 4.33799L13.525 3.17699ZM6.68001 8.55699C7.44701 9.18499 8.55202 9.18499 9.31902 8.55699L8.36902 7.39499C8.15402 7.57099 7.84502 7.57099 7.63001 7.39499L6.68001 8.55599V8.55699Z"
                    fill="#71717A"
                  />
                </svg>
                <p>thibaud.wajrock@icloud.com</p>
              </div>
            </a>

            <div className="languages">
              <a href={linksFR[location.pathname]}>
                <svg
                  className={lang === "en" ? "active" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <rect
                    x="1"
                    y="4"
                    width="30"
                    height="24"
                    rx="4"
                    ry="4"
                    fill="#fff"
                  ></rect>
                  <path
                    d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                    fill="#a62842"
                  ></path>
                  <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
                  <path
                    fill="#a62842"
                    d="M2 15.077H31V16.923000000000002H2z"
                  ></path>
                  <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
                  <path
                    d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                    fill="#a62842"
                  ></path>
                  <path
                    d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
                    fill="#102d5e"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
                  ></path>
                </svg>
              </a>
              <a href={linksEN[location.pathname]}>
                <svg
                  className={lang === "fr" ? "active" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path fill="#fff" d="M10 4H22V28H10z"></path>
                  <path
                    d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    fill="#092050"
                  ></path>
                  <path
                    d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                    transform="rotate(180 26 16)"
                    fill="#be2a2c"
                  ></path>
                  <path
                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                    opacity=".15"
                  ></path>
                  <path
                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                    fill="#fff"
                    opacity=".2"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <a href="/resume.pdf" target="_blank" className="phone-menu-cta">
            <div className="get-resume">
              <p>Get my CV</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
