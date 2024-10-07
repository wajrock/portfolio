import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "src/LanguageContext";
import { motion } from "framer-motion";

const AboutSection: FunctionComponent<{ id: string}> = ({
  id
}) => {
  const firstAccordion = useRef<HTMLDivElement>(null);
  const secondAccordion = useRef<HTMLDivElement>(null);

  const firstChevron = useRef<SVGSVGElement>(null);
  const secondChevron = useRef<SVGSVGElement>(null);

  const {currentLanguage} = useLanguage();

  const toggleAccordion = (
    refContent: React.RefObject<HTMLDivElement>,
    refChevron: React.RefObject<SVGSVGElement>
  ) => {
    if (refChevron.current) {
      refChevron.current.style.transform === "rotate(180deg)"
        ? (refChevron.current.style.transform = "rotate(0deg)")
        : (refChevron.current.style.transform = "rotate(180deg)");
    }

    if (refContent.current) {
      const accordionContent = refContent.current;
      console.log(accordionContent.scrollHeight);

      if (accordionContent.style.height) {
        accordionContent.style.height = "";
      } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
      }
    }
  };

  return (
    <div className="about-wrap" id={id}>
      <h1 className="about-wrap-title section-title">
        {currentLanguage === "en" ? "Know more About Me ✌" : "En savoir plus sur moi ✌"}
      </h1>
      <div className="about-wrap-content">
      <motion.aside initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ ease: "anticipate", duration:1 }} viewport={{once:true}} className="about-wrap-content-left leftContent">
      {currentLanguage === "en" ? (
            <div className="leftContent-texts">
              <p>
                Hello, my name is Thibaud Wajrock. I am a student in Information
                Systems Engineering, passionate about creating solutions that
                combine technical efficiency, refined design, and optimal user
                experience.
              </p>

              <p>
                Beyond the purely technical aspects, I place a strong emphasis
                on aesthetics and how users interact with the products I
                develop. I believe that every detail matters, which is why I
                always incorporate thoughtful design into my projects.
              </p>

              <p>
                In addition, I always work with kindness, convinced that the
                best solutions come from a respectful and collaborative work
                environment. I enjoy being part of teams where listening and
                cooperation are essential, and I strive to contribute positively
                to each project by bringing not only my technical skills but
                also my kindness and a positive attitude.
              </p>
            </div>
          ) : (
            <div className="leftContent-texts">
              <p>
                Bonjour, je m'appelle Thibaud Wajrock. Je suis étudiant en
                ingénierie des systèmes d’informations, passionné par la
                création de solutions qui allient efficacité technique, design
                soigné, et expérience utilisateur optimale.
              </p>

              <p>
                Au-delà des aspects purement techniques, j'accorde une
                importance particulière à l'esthétique et à la manière dont les
                utilisateurs interagissent avec les produits que je développe.
                Je crois que chaque détail compte, et c'est pourquoi j'intègre
                toujours une réflexion sur le design dans mes projets.
              </p>

              <p>
                En parallèle, je travaille toujours avec bienveillance,
                convaincu que les meilleures solutions naissent d'un
                environnement de travail respectueux et collaboratif. J'aime
                évoluer au sein d'équipes où l'écoute et la coopération sont
                essentielles, et je m'efforce de contribuer positivement à
                chaque projet en apportant autant mes compétences techniques,
                que ma bienveillance et mon sourire.
              </p>
            </div>
          )}

          <div className="leftContent-networks">
            <Link
              to={"https://linkedin.com/in/wajrock"}
              target="_blank"
              className="leftContent-networks-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fill="#0076b2"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                />
              </svg>
              <p>LinkedIn</p>
            </Link>

            <Link
              to={"https://github/@wajrock"}
              target="_blank"
              className="leftContent-networks-item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#00000"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
              <p>Github</p>
            </Link>

            <Link
              to={"https://figma.com/@wajrock"}
              target="_blank"
              className="leftContent-networks-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.6675 2H8.3335C7.4494 2 6.60151 2.35121 5.97636 2.97636C5.35121 3.60151 5 4.4494 5 5.3335C5 6.2176 5.35121 7.06549 5.97636 7.69064C6.60151 8.31579 7.4494 8.667 8.3335 8.667H11.6675V2Z"
                  fill="#F24E1E"
                />
                <path
                  d="M11.667 8.667H8.333C7.44903 8.667 6.60127 9.01815 5.97621 9.64321C5.35115 10.2683 5 11.116 5 12C5 12.884 5.35115 13.7317 5.97621 14.3568C6.60127 14.9818 7.44903 15.333 8.333 15.333H11.667V8.667Z"
                  fill="#A259FF"
                />
                <path
                  d="M18.333 12C18.333 12.8841 17.9818 13.732 17.3567 14.3571C16.7315 14.9823 15.8836 15.3335 14.9995 15.3335C14.1154 15.3335 13.2675 14.9823 12.6424 14.3571C12.0172 13.732 11.666 12.8841 11.666 12C11.666 11.1159 12.0172 10.268 12.6424 9.64286C13.2675 9.01771 14.1154 8.6665 14.9995 8.6665C15.8836 8.6665 16.7315 9.01771 17.3567 9.64286C17.9818 10.268 18.333 11.1159 18.333 12Z"
                  fill="#1ABCFE"
                />
                <path
                  d="M8.33395 15.334H11.668V18.667C11.6678 19.3261 11.4721 19.9704 11.1058 20.5183C10.7395 21.0663 10.219 21.4933 9.60998 21.7455C9.00099 21.9976 8.33092 22.0635 7.68447 21.9349C7.03803 21.8063 6.44424 21.4889 5.97817 21.0228C5.5121 20.5567 5.19468 19.9629 5.06605 19.3165C4.93741 18.67 5.00333 18 5.25547 17.391C5.50762 16.782 5.93466 16.2614 6.48262 15.8951C7.03057 15.5288 7.67483 15.3342 8.33395 15.334Z"
                  fill="#0ACF83"
                />
                <path
                  d="M11.666 2H14.999C15.8831 2 16.731 2.35121 17.3562 2.97636C17.9813 3.60151 18.3325 4.4494 18.3325 5.3335C18.3325 6.2176 17.9813 7.06549 17.3562 7.69064C16.731 8.31579 15.8831 8.667 14.999 8.667H11.666V2Z"
                  fill="#FF7262"
                />
              </svg>
              <p>Figma</p>
            </Link>
          </div>
        </motion.aside>
      <aside className="about-wrap-content-right rightContent">
          <motion.img
              src={`${process.env.PUBLIC_URL}/profile.jpeg`}
              alt=""
              className="rightContent-picture"
              initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ ease: "anticipate", duration:1,delay:.25 }} viewport={{once:true}}
            />
         
        </aside>
       

       
      </div>

      {/* <section className="about-wrap-discover">
        <div className="about-wrap-discover-item ">
          <header
            className="about-wrap-discover-item-header"
            onClick={() => {
              toggleAccordion(firstAccordion, firstChevron);
            }}
          >
            <p>
              {currentLanguage === "en"
                ? "Discover my academic journey"
                : "Découvrez mon parcours académique"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              ref={firstChevron}
            >
              <path
                d="M17 9.89864C16.8126 9.71239 16.5592 9.60785 16.295 9.60785C16.0308 9.60785 15.7774 9.71239 15.59 9.89864L12 13.4386L8.46 9.89864C8.27264 9.71239 8.01919 9.60785 7.755 9.60785C7.49081 9.60785 7.23736 9.71239 7.05 9.89864C6.95627 9.9916 6.88188 10.1022 6.83111 10.2241C6.78034 10.3459 6.7542 10.4766 6.7542 10.6086C6.7542 10.7407 6.78034 10.8714 6.83111 10.9932C6.88188 11.1151 6.95627 11.2257 7.05 11.3186L11.29 15.5586C11.383 15.6524 11.4936 15.7268 11.6154 15.7775C11.7373 15.8283 11.868 15.8544 12 15.8544C12.132 15.8544 12.2627 15.8283 12.3846 15.7775C12.5064 15.7268 12.617 15.6524 12.71 15.5586L17 11.3186C17.0937 11.2257 17.1681 11.1151 17.2189 10.9932C17.2697 10.8714 17.2958 10.7407 17.2958 10.6086C17.2958 10.4766 17.2697 10.3459 17.2189 10.2241C17.1681 10.1022 17.0937 9.9916 17 9.89864Z"
                fill="#181818"
              />
            </svg>
          </header>

          <main
            className="about-wrap-discover-item-grid gridContent academicGrid"
            ref={firstAccordion}
          >
            <div className="gridContent-item">
              <div className="gridContent-item-texts">
                <p className="gridContent-item-texts-tag">
                  {currentLanguage === "en" ? "Since 2022" : "Depuis 2022"}
                </p>
                <p className="gridContent-item-texts-title">
                  {currentLanguage === "en" ? "Master of sciences" : "Diplôme d'Ingénieur"}
                  <br />
                  {currentLanguage === "en"
                    ? "(Information Systems)"
                    : "(Systèmes d'Informations)"}
                </p>
                <p className="gridContent-item-texts-text">
                  {currentLanguage === "en"
                    ? "I am currently pursuing a Master of Science in Information Systems at the Rennes Graduate School of Engineering,focusing on Object-Oriented Programming and Project Management."
                    : "Je poursuis actuellement un Diplôme d'Ingénieurs en systèmes d'information à l'Ecole Supérieure d'Ingénieurs de Rennes, avec notamment de la programmation orientée objet et de la gestion de projet."}
                </p>
              </div>
            </div>
            <div className="gridContent-item">
              <div className="gridContent-item-texts">
                <p className="gridContent-item-texts-tag">2021</p>
                <p className="gridContent-item-texts-title">
                  {currentLanguage === "en"
                    ? "High-School Diploma (Advanced Mathematics and Physics-Chemistry )"
                    : "Diplôme du Bacalauréat (Mathématiques expertes et Physique-Chimie"}
                </p>
                <p className="gridContent-item-texts-text">
                  {currentLanguage === "en"
                    ? "I earned my High School Diploma with honors from Saint-Lô Institute High School in Agneaux, France, specializing in Advanced Mathematics and Physics-Chemistry."
                    : "J'ai obtenu mon diplôme du Bacalauréat avec mention à l'Institut Saint-Lô à Agneaux, France, avec une spécialisation en mathématiques expertes et en physique-chimie."}
                </p>
              </div>
            </div>
          </main>
        </div>

        <div className="about-wrap-discover-item ">
          <header
            className="about-wrap-discover-item-header"
            onClick={() => {
              toggleAccordion(secondAccordion, secondChevron);
            }}
          >
            <p>
              {currentLanguage === "en"
                ? "Discover notable things about me"
                : "Découvrez des choses notables à mon sujet"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              ref={secondChevron}
            >
              <path
                d="M17 9.89864C16.8126 9.71239 16.5592 9.60785 16.295 9.60785C16.0308 9.60785 15.7774 9.71239 15.59 9.89864L12 13.4386L8.46 9.89864C8.27264 9.71239 8.01919 9.60785 7.755 9.60785C7.49081 9.60785 7.23736 9.71239 7.05 9.89864C6.95627 9.9916 6.88188 10.1022 6.83111 10.2241C6.78034 10.3459 6.7542 10.4766 6.7542 10.6086C6.7542 10.7407 6.78034 10.8714 6.83111 10.9932C6.88188 11.1151 6.95627 11.2257 7.05 11.3186L11.29 15.5586C11.383 15.6524 11.4936 15.7268 11.6154 15.7775C11.7373 15.8283 11.868 15.8544 12 15.8544C12.132 15.8544 12.2627 15.8283 12.3846 15.7775C12.5064 15.7268 12.617 15.6524 12.71 15.5586L17 11.3186C17.0937 11.2257 17.1681 11.1151 17.2189 10.9932C17.2697 10.8714 17.2958 10.7407 17.2958 10.6086C17.2958 10.4766 17.2697 10.3459 17.2189 10.2241C17.1681 10.1022 17.0937 9.9916 17 9.89864Z"
                fill="#181818"
              />
            </svg>
          </header>

          <main
            className="about-wrap-discover-item-grid gridContent passionGrid"
            ref={secondAccordion}
          >
            <div className="gridContent-item">
              <div className="gridContent-item-texts">
                <p className="gridContent-item-texts-tag">Distinction</p>
                <p className="gridContent-item-texts-title">
                  {currentLanguage === "en"
                    ? "Human Rights Advocacy Competition Winner"
                    : "Lauréat d'un concours de plaidoiries pour les droits de l'Homme"}
                </p>
              </div>

              <div className="gridContent-item-picture advocacy">
                <img
                  src={`${process.env.PUBLIC_URL}/passions/advocacy.png`}
                  alt=""
                />
              </div>
            </div>

            <div className="gridContent-item passionItem">
              <div className="gridContent-item-texts">
                <p className="gridContent-item-texts-tag ">
                  {currentLanguage === "en" ? "Running" : "Course à pied"}
                </p>
                <p className="gridContent-item-texts-title">
                  {currentLanguage === "en"
                    ? "Aspiring 10K and Half Marathon Runner"
                    : "En préparation pour une course de 10 km et un semi-marathon"}
                </p>
              </div>

              <div className="gridContent-item-picture running">
                <img
                  src={`${process.env.PUBLIC_URL}/passions/running.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="gridContent-item passionItem">
              <div className="gridContent-item-texts">
                <p className="gridContent-item-texts-tag">
                  {currentLanguage === "en" ? "Music" : "Musique"}
                </p>
                <p className="gridContent-item-texts-title">
                  {currentLanguage === "en"
                    ? "Passionate About Music Across All Genres"
                    : "Vrai passioné de musique de tout les genres"}
                </p>
              </div>

              <div className="gridContent-item-picture music">
                <img
                  src={`${process.env.PUBLIC_URL}/passions/music.png`}
                  alt=""
                />
              </div>
            </div>
          </main>
        </div>
      </section> */}
    </div>
  );
};

export default AboutSection;
