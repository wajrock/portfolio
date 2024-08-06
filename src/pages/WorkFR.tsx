import React, { FunctionComponent, useEffect } from "react";
import FooterSection from "../sections/FooterSection";
import { Link, useParams } from "react-router-dom";
import "./Work.scss";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import Pill from "../component/Pill/Pill";
import ScrollToTop from "../component/ScrollTo";

const WorkFR: FunctionComponent = () => {
  const { projectId } = useParams<string>();
  let projectClassName = "";

  if (projectId === "green-fit") {
    projectClassName = "project3";
  } else if (projectId === "app-notes") {
    projectClassName = "project1";
  } else if (projectId === "keops") {
    projectClassName = "project4";
  } else if (projectId === "portfolio") {
    projectClassName = "project2";
  }

  const lang = "fr";

  useEffect(() => {
    switch (projectId) {
      case "green-fit":
        document.title = "GREENFIT | Thibaud Wajrock"
        break;

      case "app-notes":
        document.title = "ESIRESULTATS | Thibaud Wajrock"
        break;
        
      case "keops":
        document.title = "KEOPS | Thibaud Wajrock"
        break;

      case "portfolio":
        document.title = "PORTFOLIO | Thibaud Wajrock"
        break;
    
      default:
        break;
    }
  }, [projectId]);

  return (
    <div className="work-root">
    <div className="work-page">
      <div className="fixed">
        <Banner lang={lang} />
        <Header lang={lang} />
      </div>

      {projectId === "green-fit" && (
        <div className="hero-project">
          <div className="hero-project-tags">
            <Pill tag haveIcon={false} text={"2024"} />
            <Pill tag haveIcon={false} text={"Brand Identity"} />
            <Pill tag haveIcon={false} text={"Figma"} />
          </div>

          <div className="hero-project-texts">
            <h2 className="hero-project-texts-name">GreenFit</h2>
            <h2 className="hero-project-texts-title">
              Une identité de marque pour une nouvelle société de Retrofit
            </h2>
          </div>

          <div className="hero-project-links">
            <a href="https://www.figma.com/community/file/1401986177194596437/green-fits-identity" target="_blank" rel="noreferrer noopener"><Pill haveIcon={false} text={"Voir plus sur Figma"} haveHover /></a>
          </div>
        </div>
      )}

      {projectId === "app-notes" && (
        <div className="hero-project">
          <div className="hero-project-tags">
            <Pill tag haveIcon={false} text={"2024"} />
            <Pill tag haveIcon={false} text={"P.W.A"} />
            <Pill tag haveIcon={false} text={"Figma"} />
          </div>

          <div className="hero-project-texts">
            <h2 className="hero-project-texts-name">Esirésultats</h2>
            <h2 className="hero-project-texts-title">
              Une application de gestion des notes pour les étudiants de l'ESIR.
            </h2>
          </div>

          <div className="hero-project-links">
            <a
              href="https://www.figma.com/proto/iWaPCqQIKmhd7D7SoqcUhj/ESIR%C3%A9sultats---Community?node-id=405-998&t=IZiG0LGW8uwX96cd-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A1763&starting-point-node-id=289%3A1859&hide-ui=1"
              target="_blank" rel="noreferrer noopener"
            >
              <Pill haveIcon={false} text={"Démo live sur Figma"} haveHover />
            </a>
          </div>
        </div>
      )}

      {projectId === "keops" && (
        <div className="hero-project">
          <div className="hero-project-tags">
            <Pill tag haveIcon={false} text={"2023"} />
            <Pill tag haveIcon={false} text={"Python"} />
          </div>

          <div className="hero-project-texts">
            <h2 className="hero-project-texts-name">KEOPS</h2>
            <h2 className="hero-project-texts-title">
              Un jeu de quêtes en 2D en Python.
            </h2>
          </div>

          <div className="hero-project-links">
            <a href="https://github.com/wajrock/keops" target="_blank" rel="noreferrer noopener">
              <Pill haveIcon={false} text={"Voir plus sur Github"} haveHover />
            </a>
          </div>
        </div>
      )}

      {projectId === "portfolio" && (
        <div className="hero-project">
          <div className="hero-project-tags">
            <Pill tag haveIcon={false} text={"2024"} />
            <Pill tag haveIcon={false} text={"Website"} />
            <Pill tag haveIcon={false} text={"React"} />
          </div>

          <div className="hero-project-texts">
            <h2 className="hero-project-texts-name">Mon portfolio</h2>
            <h2 className="hero-project-texts-title">
              Un portfolio moderne en React pour développeurs et designers.
            </h2>
          </div>

          <div className="hero-project-links">
            <a href="https://github.com/wajrock/portfolio" target="_blank" rel="noreferrer noopener">
              <Pill haveIcon={false} text={"Voir plus sur Github"} haveHover />
            </a>
          </div>
        </div>
      )}

      {projectId === "green-fit" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
              Dans le cadre de notre projet universitaire, nous avons conçu un
              produit innovant et élaboré une identité de marque complète autour
              de cette idée. Découvrez GreenFit, une entreprise spécialisée dans
              le retrofit de véhicules. Notre mission est de fusionner
              technologie moderne et durabilité pour rendre les véhicules plus
              écologiques. Ce projet vise à créer une identité visuelle forte et
              cohérente, reflétant les valeurs et les ambitions de GreenFit.
            </p>
          </div>

          <div className="content-project-paragraph">
            <h3>Le Logo</h3>
            <p>
              Le logo de GreenFit est une représentation unique et significative
              de notre mission. En combinant une éolienne et une roue de
              voiture, il symbolise l'union harmonieuse entre l'énergie
              renouvelable et le transport, incarnant notre engagement envers la
              durabilité et l'innovation.
              <br />
              <br />
              Conçu pour être flexible et impactant, le logo s'adapte à divers
              contextes : véhicules, panneaux publicitaires et supports
              numériques. Sa conception dynamique avec des lignes épurées et des
              formes équilibrées renforce les notions de mouvement et de
              progrès, essentielles à notre philosophie.
              <br />
              <br />
              Les courbes douces de l'éolienne et les contours robustes de la
              roue ajoutent profondeur et signification, reflétant notre
              engagement envers l'innovation technologique et un avenir plus
              vert. En situation, le logo de GreenFit ne marque pas seulement
              notre présence, il raconte une histoire de transformation et de
              renouveau, capturant l'essence de notre marque et transmettant nos
              valeurs de manière cohérente et puissante.
            </p>
          </div>

          <div className="content-project-grid-image">
            <img
              className="content-project-image small"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/11.png`}
              alt=""
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/10.png`}
              alt=""
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/13.png`}
              alt=""
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/5.png`}
              alt=""
            />
          </div>

          <div className="content-project-paragraph">
            <h3>Les Valeurs de la Marque</h3>
            <p>
              L'identité de marque de GreenFit ne se limite pas à un logo ; elle
              intègre des valeurs fondamentales et une vision claire du monde.
              Nos valeurs définissent qui nous sommes et orientent nos actions.
              <p className="list">
                <ul>
                  <li>
                    Qualité (Quality) : Nous nous engageons à offrir des
                    produits et services de haute qualité, assurant la
                    satisfaction de nos clients.
                  </li>

                  <li>
                    Confiance (Trust) : Nous bâtissons des relations solides et
                    durables basées sur la transparence et l'intégrité.
                  </li>

                  <li>
                    Économies (Savings) : Nos solutions de retrofit permettent
                    de prolonger la durée de vie des véhicules et de réduire les
                    coûts.
                  </li>

                  <li>
                    Écologie (Eco-friendly) : Nous nous engageons à réduire
                    notre empreinte carbone et à promouvoir des pratiques
                    durables.
                  </li>

                  <li>
                    Performance (Performance) : Nos solutions offrent des
                    performances exceptionnelles tout en respectant
                    l'environnement.
                  </li>

                  <li>
                    Innovation (Innovation) : Nous recherchons constamment de
                    nouvelles technologies pour améliorer nos produits et rester
                    à la pointe de l'industrie.
                  </li>
                </ul>
              </p>
              Ces valeurs, au cœur de notre identité, vont bien au-delà du logo
              et définissent notre engagement envers un avenir plus vert et
              durable.
            </p>
          </div>

          <img
            className="content-project-image"
            src={`${process.env.PUBLIC_URL}/projects/greenfit/12.png`}
            alt=""
          />

          <div className="content-project-paragraph">
            <h3>Les Couleurs et la Police d'Écriture de la Marque</h3>
            <p>
              L'identité visuelle de GreenFit repose sur une palette de couleurs
              et une typographie soigneusement choisies pour refléter nos
              valeurs et notre mission. Les couleurs et la police d'écriture
              jouent un rôle crucial dans la cohérence et la reconnaissance de
              notre marque. La palette de couleurs de GreenFit se compose de
              trois teintes principales :
              <p className="list">
                <ul>
                  <li>
                    Vert : Symbolisant la durabilité, l'écologie et notre
                    engagement envers un avenir plus vert.
                  </li>
                  <li>
                    Bleu foncé : Représentant la fiabilité, la stabilité et la
                    confiance que nous souhaitons inspirer à nos clients.
                  </li>
                  <li>
                    Blanc : Évoquant la pureté, la simplicité et la transparence
                    dans toutes nos actions.
                  </li>
                </ul>
              </p>
              Ces couleurs travaillent ensemble pour créer une identité visuelle
              équilibrée et professionnelle, capable de capter l'attention et de
              transmettre nos valeurs fondamentales. La police d'écriture
              utilisée par GreenFit est Montserrat. Moderne et lisible,
              Montserrat complète parfaitement notre logo et renforce la
              cohérence visuelle de notre marque. Elle incarne la clarté et la
              simplicité, des éléments essentiels pour communiquer efficacement
              notre message. En combinant ces couleurs et cette typographie,
              nous créons une identité visuelle forte et reconnaissable qui
              reflète fidèlement les valeurs et la mission de GreenFit.
            </p>
          </div>

          <div className="content-project-grid-image">
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/14.png`}
              alt=""
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/16.png`}
              alt=""
            />
          </div>

          <div className="content-project-paragraph">
            <h3>Conclusion</h3>
            <p>
              Ce projet d'identité de marque pour GreenFit a été une expérience
              enrichissante qui m'a permis de fusionner créativité et stratégie.
              En développant une identité visuelle cohérente, j'ai pu renforcer
              mes compétences en design et mieux comprendre l'importance de
              l'alignement entre les valeurs d'une entreprise et son image de
              marque. Ce travail m'a apporté une perspective précieuse sur
              l'impact du design dans la communication et le développement d'une
              marque durable et innovante.
            </p>
          </div>
        </div>
      )}

      {projectId === "app-notes" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
              Pour répondre au besoin d'un accès facile et intuitif aux notes
              académiques des étudiants, j'ai entrepris un projet personnel pour
              développer une Progressive Web Application (PWA) de gestion de
              notes destinée aux étudiants de l'ESIR. Mon objectif était de
              créer une solution qui permettrait à tous les étudiants de
              consulter et gérer leurs résultats de manière simple et efficace.
            </p>

            <p>
              J'ai conçu toute l'application sur Figma, où j'ai élaboré un
              prototype détaillé qui est consultable et reflète fidèlement
              l'expérience utilisateur prévue. Ce travail de design a permis de
              définir précisément les fonctionnalités et l'interface de
              l'application avant de passer à la phase de développement.
            </p>

            <p>
              Mon intention initiale était de développer cette application en
              React, tirant parti de ses capacités pour créer des interfaces
              dynamiques et réactives. Cependant, l'université a mis à
              disposition un service similaire, ce qui rendait le développement
              de ma propre solution redondant, fastidieux et non productif.
              Malgré cela, ce projet m'a permis de renforcer mes compétences en
              design d'interface et en prototypage, ainsi que d'acquérir une
              précieuse expérience en planification et gestion de projet.
            </p>
          </div>
        </div>
      )}

      {projectId === "keops" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
              Dans le cadre de notre projet universitaire, nous avons conçu un
              produit innovant et élaboré une identité de marque complète autour
              de cette idée. Découvrez GreenFit, une entreprise spécialisée dans
              le retrofit de véhicules. Notre mission est de fusionner
              technologie moderne et durabilité pour rendre les véhicules plus
              écologiques. Ce projet vise à créer une identité visuelle forte et
              cohérente, reflétant les valeurs et les ambitions de GreenFit.
            </p>
          </div>
        </div>
      )}

      {projectId === "portfolio" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
              Dans le but de me démarquer et de mettre en vitrine mes projets
              ainsi que mes différentes compétences, j'ai entrepris la création
              de mon portfolio en React. Ce projet personnel répond à une
              volonté de présenter mon travail de manière professionnelle et
              attrayante, tout en reflétant ma vision du design et du
              développement de systèmes d'information et d'interfaces.
            </p>

            <p>
              J'ai conçu ce portfolio avec une interface moderne et minimaliste,
              visant à offrir une expérience utilisateur fluide et intuitive.
              Chaque aspect du design a été pensé pour mettre en avant mes
              réalisations et mes capacités de manière claire et esthétique. En
              utilisant React, j'ai pu tirer parti de ses fonctionnalités pour
              créer une interface dynamique et réactive qui s'adapte
              parfaitement aux différents appareils.
            </p>

            <p>
              Ce projet m'a permis de consolider mes compétences en
              développement front-end et en design d'interface, tout en me
              donnant une plateforme pour exposer mes projets et démontrer ma
              capacité à concevoir et réaliser des solutions numériques
              innovantes.
            </p>
          </div>
        </div>
      )}

      <div className="other-projects">
        <p className="other-projects-title">Découvrez d'autres projets</p>

        {projectId === "app-notes" && (
          <div className="grid-projects">
            <Link to="/fr/projet/green-fit" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project3"></div>
                <div className="grid-projects-item__description">
                  <p>Identé de marque pour GreenFit</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>

            <Link to="/fr/projet/portfolio" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project2"></div>
                <div className="grid-projects-item__description">
                  <p>Portfolio en React</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {projectId === "green-fit" && (
          <div className="grid-projects">
            <Link to="/fr/projet/portfolio" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project2"></div>
                <div className="grid-projects-item__description">
                  <p>Portfolio en React</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>

            <Link to="/fr/projet/keops" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project4"></div>
                <div className="grid-projects-item__description">
                  <p>Jeu de quêtes Python en 2D</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {projectId === "portfolio" && (
          <div className="grid-projects">
            <Link to="/fr/projet/keops" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project4"></div>
                <div className="grid-projects-item__description">
                  <p>Jeu de quêtes Python en 2D</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>

            <Link to="/fr/projet/app-notes" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project1"></div>
                <div className="grid-projects-item__description">
                  <p>Application de gestion de notes</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {projectId === "keops" && (
          <div className="grid-projects" onClick={ScrollToTop}>
            <Link to="/fr/projet/app-notes">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project1"></div>
                <div className="grid-projects-item__description">
                  <p>Application de gestion de notes</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>

            <Link to="/fr/projet/green-fit" onClick={ScrollToTop}>
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project3"></div>
                <div className="grid-projects-item__description">
                  <p>Identé de marque pour GreenFit</p>
                  <p>2024</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      
    </div>
    <FooterSection id="contact" lang={lang}/>
    </div>
  );
};

export default WorkFR;