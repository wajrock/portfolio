import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./Services.scss";
import useOnScreen from "../Functions";

const ServicesSection: FunctionComponent<{ id: string; lang: string }> = ({id,lang,})=> {

  const ref = useRef<HTMLDivElement>(null)
  const refGrid = useRef<HTMLDivElement>(null)
  const headerIsVisible = useOnScreen(ref)
  const gridIsVisible = useOnScreen(refGrid)

  useEffect(()=>{
    if (headerIsVisible && !ref.current?.classList.contains('animate')){
      ref.current?.classList.add("animate")
    }

  },[headerIsVisible])

  useEffect(()=>{
    if (gridIsVisible && !refGrid.current?.classList.contains('animate')){
      refGrid.current?.classList.add("animate")
    }

  },[gridIsVisible])
  
  return (
    <div  className="services-section" id={id}>
      <div ref={ref} className={"services-section-texts"}>
        <h1 className="services-section-texts-title">{lang === "en" ? "You come up with idea, I make it 🔨 real" : "Venez avec une idée, je la rends 🔨 réelle"} </h1>
        <p className="services-section-texts-description">{lang === "en" ? "I am able to follow you in each step of your projects, from the design stage to the programming stage" : "Je suis en mesure de vous accompagner à chaque étape de vos projets, de la phase de design à celle de la programmation."}</p>
      </div>

      <div className="services-grid" ref={refGrid}>
        <div className="services-grid-item">
          <div className="services-grid-item-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
              <g clip-path="url(#clip0_247_271)">
                <path d="M7.5003 10.3367L10.6485 13.4848M6.64603 18.4639C5.507 19.6029 3.33366 19.3182 1.66699 19.3182C2.52124 17.6515 1.38221 15.4781 2.52124 14.3391C3.66027 13.2001 5.507 13.2001 6.64603 14.3391C7.78506 15.4781 7.78506 17.3249 6.64603 18.4639ZM9.93499 14.2554L17.5492 6.03196C18.2199 5.30766 18.1983 4.18284 17.5003 3.48484C16.8023 2.78685 15.6775 2.76523 14.9532 3.43588L6.72977 11.0501C6.30482 11.4436 6.09235 11.6403 5.96843 11.8502C5.67128 12.3533 5.65932 12.9753 5.93692 13.4895C6.05268 13.7039 6.25744 13.9087 6.66695 14.3182C7.07646 14.7277 7.28121 14.9324 7.49564 15.0482C8.00983 15.3258 8.63183 15.3138 9.13497 15.0167C9.34479 14.8928 9.54152 14.6803 9.93499 14.2554Z" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_247_271">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.984863)"/>
                </clipPath>
              </defs>
            </svg>
            <h2>{lang === "en" ? "Branding" : "Idendité de marque"}</h2>
          </div>
          {lang === "en" ? (<p className="services-grid-item-text">
            Creating strong, memorable brand identities that resonate with your target audience and elevate your market presence.
          </p>):(<p className="services-grid-item-text">
            Créer des identités de marque fortes et mémorables qui résonnent avec votre public cible et élèvent votre présence sur le marché.
          </p>)}

          
        </div>

        <div className="services-grid-item">
          <div className="services-grid-item-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
              <path d="M4.16699 5.14295C4.16699 4.33365 4.16699 3.929 4.33573 3.70594C4.48274 3.51161 4.70743 3.39136 4.95066 3.37684C5.22986 3.36017 5.56655 3.58463 6.23993 4.03355L15.0029 9.87553C15.5593 10.2465 15.8375 10.4319 15.9344 10.6657C16.0192 10.8701 16.0192 11.0998 15.9344 11.3042C15.8375 11.5379 15.5593 11.7234 15.0029 12.0943L6.23992 17.9363C5.56655 18.3852 5.22986 18.6097 4.95066 18.593C4.70743 18.5785 4.48274 18.4582 4.33573 18.2639C4.16699 18.0409 4.16699 17.6362 4.16699 16.8269V5.14295Z" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2>{lang === "en" ? "Mockups & Prototypes" : "Maquettes et prototypes"}</h2>
          </div>
          {lang === "en" ? (<p className="services-grid-item-text">
            Designing detailed mockups and interactive prototypes that bring your ideas to life, enabling you to visualize and test concepts before development.
          </p>):(<p className="services-grid-item-text">
            Concevoir des maquettes détaillées et des prototypes interactifs qui donnent vie à vos idées, vous permettant de visualiser et de tester les concepts avant le développement.
          </p>)}
        </div>

        <div className="services-grid-item">
          <div className="services-grid-item-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
              <path d="M16.25 3.38745H3.75C3.16984 3.38745 2.61344 3.61792 2.2032 4.02816C1.79297 4.43839 1.5625 4.99479 1.5625 5.57495V14.0125C1.5625 14.5926 1.79297 15.149 2.2032 15.5592C2.61344 15.9695 3.16984 16.2 3.75 16.2H9.0625V17.1375H7.5C7.25136 17.1375 7.0129 17.2362 6.83709 17.412C6.66127 17.5879 6.5625 17.8263 6.5625 18.075C6.5625 18.3236 6.66127 18.562 6.83709 18.7379C7.0129 18.9137 7.25136 19.0125 7.5 19.0125H12.5C12.7486 19.0125 12.9871 18.9137 13.1629 18.7379C13.3387 18.562 13.4375 18.3236 13.4375 18.075C13.4375 17.8263 13.3387 17.5879 13.1629 17.412C12.9871 17.2362 12.7486 17.1375 12.5 17.1375H10.9375V16.2H16.25C16.5373 16.2 16.8217 16.1434 17.0871 16.0334C17.3525 15.9235 17.5937 15.7624 17.7968 15.5592C17.9999 15.3561 18.1611 15.115 18.271 14.8496C18.3809 14.5842 18.4375 14.2997 18.4375 14.0125V5.57495C18.4375 5.28768 18.3809 5.00323 18.271 4.73783C18.1611 4.47243 17.9999 4.23128 17.7968 4.02816C17.5937 3.82503 17.3525 3.6639 17.0871 3.55396C16.8217 3.44403 16.5373 3.38745 16.25 3.38745ZM3.75 5.26245H16.25C16.3329 5.26245 16.4124 5.29538 16.471 5.35398C16.5296 5.41259 16.5625 5.49207 16.5625 5.57495V11.2H3.4375V5.57495C3.4375 5.49207 3.47042 5.41259 3.52903 5.35398C3.58763 5.29538 3.66712 5.26245 3.75 5.26245ZM16.25 14.325H3.75C3.66712 14.325 3.58763 14.292 3.52903 14.2334C3.47042 14.1748 3.4375 14.0953 3.4375 14.0125V13.075H16.5625V14.0125C16.5625 14.0953 16.5296 14.1748 16.471 14.2334C16.4124 14.292 16.3329 14.325 16.25 14.325Z" fill="#3B82F6"/>
            </svg>
            <h2>{lang === "en" ? "Landing Page & E-commerce website" : "Landing Page & site E-commerce"}</h2>
          </div>
          {lang === "en" ? (<p className="services-grid-item-text">Designing high-conversion landing pages and e-commerce websites that capture leads, drive sales, and boost your online performance.
          </p>):(<p className="services-grid-item-text">Concevoir des landing pages à forte conversion et des sites e-commerce qui captent des prospects, stimulent les ventes et améliorent votre performance en ligne.
          </p>)}
        </div>

        <div className="services-grid-item">
          <div className="services-grid-item-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
              <g clip-path="url(#clip0_247_271)">
                <path d="M10.0003 15.5683H10.0087M6.83366 19.3183H13.167C14.1004 19.3183 14.5671 19.3183 14.9236 19.1366C15.2372 18.9768 15.4922 18.7219 15.652 18.4083C15.8337 18.0517 15.8337 17.585 15.8337 16.6516V5.31828C15.8337 4.38486 15.8337 3.91815 15.652 3.56163C15.4922 3.24802 15.2372 2.99306 14.9236 2.83327C14.5671 2.65161 14.1004 2.65161 13.167 2.65161H6.83366C5.90024 2.65161 5.43353 2.65161 5.07701 2.83327C4.7634 2.99306 4.50844 3.24802 4.34865 3.56163C4.16699 3.91815 4.16699 4.38486 4.16699 5.31828V16.6516C4.16699 17.585 4.16699 18.0517 4.34865 18.4083C4.50844 18.7219 4.7634 18.9768 5.07701 19.1366C5.43353 19.3183 5.90024 19.3183 6.83366 19.3183ZM10.417 15.5683C10.417 15.7984 10.2304 15.9849 10.0003 15.9849C9.77021 15.9849 9.58366 15.7984 9.58366 15.5683C9.58366 15.3382 9.77021 15.1516 10.0003 15.1516C10.2304 15.1516 10.417 15.3382 10.417 15.5683Z" stroke="#FB7185" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_247_271">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.984863)"/>
                </clipPath>
              </defs>
            </svg>
            <h2>Progressive Web Application</h2>
          </div>
          {lang === "en" ? (<p className="services-grid-item-text">Developing progressive web applications that offer a seamless, engaging user experience, improving performance and accessibility.
          </p>):(<p className="services-grid-item-text">Développer des applications web progressives qui offrent une expérience utilisateur fluide et engageante, améliorant ainsi les performances et l'accessibilité.
          </p>)}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
