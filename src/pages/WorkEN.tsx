import React, { FunctionComponent, useState } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import ServicesSection from "../sections/ServicesSection";
import FooterSection from "../sections/FooterSection";
import ProjectsSection from "../sections/ProjectsSection";
import { useParams } from "react-router-dom";
import "./Work.scss";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import Pill from "../component/Pill/Pill";

const WorkEN: FunctionComponent = () => {
  const { projectId } = useParams<string>();
  let projectClassName = "";

  if (projectId === "green-fit") {
    projectClassName = "project3";
  } else if (projectId === "grades-app") {
    projectClassName = "project1";
  } else if (projectId === "keops") {
    projectClassName = "project4";
  } else if (projectId === "portfolio") {
    projectClassName = "project2";
  }

  const lang = "en";

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
              A Brand Identity for a new Retrofit society
            </h2>
          </div>

          <div className="hero-project-links">
            <Pill haveIcon={false} text={"View more on Figma"} haveHover />
          </div>
        </div>
      )}

      {projectId === "grades-app" && (
        <div className="hero-project">
          <div className="hero-project-tags">
            <Pill tag haveIcon={false} text={"2024"} />
            <Pill tag haveIcon={false} text={"P.W.A"} />
            <Pill tag haveIcon={false} text={"Figma"} />
          </div>

          <div className="hero-project-texts">
            <h2 className="hero-project-texts-name">Esirésultats</h2>
            <h2 className="hero-project-texts-title">
              A grades management app for ESIR's students.
            </h2>
          </div>

          <div className="hero-project-links">
            <a
              href="https://www.figma.com/proto/iWaPCqQIKmhd7D7SoqcUhj/ESIR%C3%A9sultats---Community?node-id=405-998&t=IZiG0LGW8uwX96cd-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A1763&starting-point-node-id=289%3A1859&hide-ui=1"
              target="_blank"
            >
              <Pill haveIcon={false} text={"Live demo on Figma"} haveHover />
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
              A 2D Python quests game.
            </h2>
          </div>

          <div className="hero-project-links">
            <a href="https://github.com/wajrock/keops" target="_blank">
              <Pill haveIcon={false} text={"View more on Github"} haveHover />
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
            <h2 className="hero-project-texts-name">My portfolio</h2>
            <h2 className="hero-project-texts-title">
              A React modern portfolio for developper and designer
            </h2>
          </div>

          <div className="hero-project-links">
            <a href="https://github.com/wajrock/portfolio" target="_blank">
              <Pill haveIcon={false} text={"View more on Github"} haveHover />
            </a>
          </div>
        </div>
      )}



      {projectId === "green-fit" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
            As part of our university project, we have designed an innovative product and developed a complete brand identity around this idea. Discover GreenFit, a company specializing in vehicle retrofitting. Our mission is to blend modern technology with sustainability to make vehicles more eco-friendly. This project aims to create a strong and coherent visual identity that reflects GreenFit's values and ambitions.
            </p>
          </div>

          <div className="content-project-paragraph">
            <h3>The Logo</h3>
            <p>
            The GreenFit logo is a unique and meaningful representation of our mission. By combining a wind turbine and a car wheel, it symbolizes the harmonious union between renewable energy and transportation, embodying our commitment to sustainability and innovation.
            </p>
            <p>
            Designed to be flexible and impactful, the logo adapts to various contexts: vehicles, billboards, and digital media. Its dynamic design with clean lines and balanced shapes reinforces the concepts of movement and progress, which are central to our philosophy.
            </p>
            <p>
            The smooth curves of the wind turbine and the robust contours of the wheel add depth and meaning, reflecting our commitment to technological innovation and a greener future. In context, the GreenFit logo not only marks our presence but also tells a story of transformation and renewal, capturing the essence of our brand and conveying our values in a coherent and powerful way.
            </p>
          </div>

          <div className="content-project-grid-image">
            <img
              className="content-project-image small"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/11.png`}
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/10.png`}
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/13.png`}
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/5.png`}
            />
          </div>

          <div className="content-project-paragraph">
            <h3>The Brand Values</h3>
            <p>
  GreenFit's brand identity is more than just a logo; it encompasses core values and a clear vision of the world. Our values define who we are and guide our actions.
  <p className="list">
    <ul>
      <li>
        Quality: We are committed to delivering high-quality products and services, ensuring customer satisfaction.
      </li>

      <li>
        Trust: We build strong and lasting relationships based on transparency and integrity.
      </li>

      <li>
        Savings: Our retrofit solutions extend the lifespan of vehicles and reduce costs.
      </li>

      <li>
        Eco-friendly: We are committed to reducing our carbon footprint and promoting sustainable practices.
      </li>

      <li>
        Performance: Our solutions offer exceptional performance while respecting the environment.
      </li>

      <li>
        Innovation: We constantly seek new technologies to improve our products and stay at the forefront of the industry.
      </li>
    </ul>
  </p>
  These values, at the heart of our identity, go beyond the logo and define our commitment to a greener and more sustainable future.
</p>

          </div>

          <img
            className="content-project-image"
            src={`${process.env.PUBLIC_URL}/projects/greenfit/12.png`}
          />

          <div className="content-project-paragraph">
            <h3>The Brand Colors and Typography</h3>
<p>
  GreenFit's visual identity is based on a carefully chosen color palette and typography to reflect our values and mission. Colors and typography play a crucial role in the consistency and recognition of our brand. The GreenFit color palette consists of three main shades:
  <p className="list">
    <ul>
      <li>
        Green: Symbolizing sustainability, ecology, and our commitment to a greener future.
      </li>
      <li>
        Dark Blue: Representing reliability, stability, and the trust we aim to inspire in our clients.
      </li>
      <li>
        White: Evoking purity, simplicity, and transparency in all our actions.
      </li>
    </ul>
  </p>
  These colors work together to create a balanced and professional visual identity, capable of capturing attention and conveying our core values. The typeface used by GreenFit is Montserrat. Modern and readable, Montserrat perfectly complements our logo and reinforces the visual coherence of our brand. It embodies clarity and simplicity, essential elements for effectively communicating our message. By combining these colors and typography, we create a strong and recognizable visual identity that faithfully reflects GreenFit's values and mission.
</p>
          </div>

          <div className="content-project-grid-image">
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/14.png`}
            />
            <img
              className="content-project-image"
              src={`${process.env.PUBLIC_URL}/projects/greenfit/16.png`}
            />
          </div>

          <div className="content-project-paragraph">
            <h3>Conclusion</h3>
            <p>
            This branding project for GreenFit has been a rewarding experience that allowed me to merge creativity and strategy. By developing a cohesive visual identity, I was able to enhance my design skills and gain a better understanding of the importance of aligning a company's values with its brand image. This work has provided me with valuable insight into the impact of design on communication and the development of a sustainable and innovative brand.
            </p>
          </div>
        </div>
      )}

      {projectId === "grades-app" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
            To address the need for easy and intuitive access to students' academic grades, I undertook a personal project to develop a Progressive Web Application (PWA) for grade management intended for ESIR students. My goal was to create a solution that would allow all students to view and manage their results in a simple and effective manner.
            </p>

            <p>
            I designed the entire application on Figma, where I developed a detailed prototype that is viewable and accurately reflects the intended user experience. This design work helped define the application's features and interface precisely before moving on to the development phase.
            </p>

            <p>
            My initial intention was to develop this application using React, leveraging its capabilities to create dynamic and responsive interfaces. However, the university provided a similar service, making the development of my own solution redundant, tedious, and unproductive. Despite this, the project allowed me to enhance my skills in interface design and prototyping, as well as gain valuable experience in planning and project management.
            </p>
          </div>
        </div>
      )}

      {projectId === "keops" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
            As part of our university project, we designed an innovative product and developed a complete brand identity around this idea. Discover GreenFit, a company specializing in vehicle retrofitting. Our mission is to blend modern technology with sustainability to make vehicles more eco-friendly. This project aims to create a strong and coherent visual identity that reflects GreenFit's values and ambitions.
            </p>
          </div>
        </div>
      )}

      {projectId === "portfolio" && (
        <div className="content-project">
          <div className={"content-project-cover " + projectClassName}></div>

          <div className="content-project-paragraph">
            <p>
            In order to stand out and showcase my projects and various skills, I embarked on creating my portfolio using React. This personal project aims to present my work in a professional and engaging manner while reflecting my vision for design and the development of information systems and interfaces.
            </p>

            <p>
            I designed this portfolio with a modern and minimalist interface, aiming to provide a smooth and intuitive user experience. Every aspect of the design has been crafted to highlight my achievements and capabilities clearly and aesthetically. By using React, I was able to leverage its features to create a dynamic and responsive interface that adapts seamlessly to different devices.
            </p>

            <p>
            This project has allowed me to solidify my front-end development and interface design skills, while also providing a platform to showcase my projects and demonstrate my ability to design and implement innovative digital solutions.
            </p>
          </div>
        </div>
      )}

      <div className="other-projects">
        <p className="other-projects-title">Check out other projects</p>

        {projectId === "grades-app" && (
          <div className="grid-projects">
            <a href="#/en/project/green-fit">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project3"></div>
                <div className="grid-projects-item__description">
                  <p>Retrofit Brand identity.</p>
                  <p>2024</p>
                </div>
              </div>
            </a>

            <a href="./portfolio">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project2"></div>
                <div className="grid-projects-item__description">
                  <p>React Portfolio</p>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </div>
        )}

        {projectId === "green-fit" && (
          <div className="grid-projects">
            <a href="./portfolio">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project2"></div>
                <div className="grid-projects-item__description">
                  <p>React Portfolio</p>
                  <p>2024</p>
                </div>
              </div>
            </a>

            <a href="./keops">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project4"></div>
                <div className="grid-projects-item__description">
                  <p>2D Python quests game</p>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </div>
        )}

        {projectId === "portfolio" && (
          <div className="grid-projects">
            <a href="./keops">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project4"></div>
                <div className="grid-projects-item__description">
                  <p>2D Python quests game</p>
                  <p>2024</p>
                </div>
              </div>
            </a>

            <a href="./grades-app">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project1"></div>
                <div className="grid-projects-item__description">
                  <p>Grades management app</p>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </div>
        )}

        {projectId === "keops" && (
          <div className="grid-projects">
            <a href="./grades-app">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project1"></div>
                <div className="grid-projects-item__description">
                  <p>Grades management App</p>
                  <p>2024</p>
                </div>
              </div>
            </a>

            <a href="./green-fit">
              <div className="grid-projects-item">
                <div className="grid-projects-item__cover project3"></div>
                <div className="grid-projects-item__description">
                  <p>Retrofit Brand Identity</p>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>

      
    </div>
    <FooterSection id="contact" lang={lang}/>
    </div>
  );
};

export default WorkEN;
