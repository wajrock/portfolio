import React, { FunctionComponent } from "react";
import "./DescriptionProject.scss";

const DescriptionProjectEN: FunctionComponent<{ idProject: string }> = ({
  idProject,
}) => {
  switch (idProject) {
    case "the-players-journal":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Overview</h2>
            <p>
              This project is a community-driven platform where users can read
              articles about their favorite video games, leave comments, and
              engage with other gamers. Built with React for the front end and a
              basic PHP API for the back end, the site provides a robust and
              interactive user experience.
            </p>
          </section>

          <section className="section-item">
            <h2>Features</h2>
            <ul>
              <li>
                <strong>User Authentication</strong>: Secure login and
                registration system with password encryption.
              </li>
              <li>
                <strong>Data Security</strong>: Implementation of anti-injection
                measures for backend requests.
              </li>
              <li>
                <strong>Immersive Design</strong>: A visually appealing design
                that aligns with gaming aesthetics.
              </li>
              <li>
                <strong>Storage and Caching</strong>: Efficient data management
                for optimized retrieval and storage.
              </li>
              <li>
                <strong>Responsive Images</strong>: Images are adapted for
                various screen sizes for improved performance.
              </li>
              <li>
                <strong>Collaborative System</strong>: Users can share their
                opinions through a review system.
              </li>
              <li>
                <strong>Responsive Design</strong>: The site is fully
                responsive, adapting seamlessly across smartphones, tablets, and
                desktops.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>API Structure</h2>
            <p>The API is structured with the following endpoints:</p>
            <ul>
              <li>
                <strong>`/article`</strong>: Retrieve, modify, delete, or add
                articles by ID.
              </li>
              <li>
                <strong>`/articles`</strong>: Fetch multiple articles with
                filtering options based on keywords.
              </li>
              <li>
                <strong>`/games`</strong>: Access data related to various video
                games.
              </li>
              <li>
                <strong>`/reviews`</strong>: Retrieve, publish, or delete
                reviews for articles.
              </li>
              <li>
                <strong>`/images`</strong>: Manage image uploads, modifications,
                and retrieval.
              </li>
              <li>
                <strong>`/users`</strong>: Access and manage user information
                for login and registration.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Technologies Used</h2>
            <ul>
              <li>
                <strong>Front End</strong>: React
              </li>
              <li>
                <strong>Back End</strong>: PHP
              </li>
              <li>
                <strong>Database</strong>: MySQL
              </li>
              <li>
                <strong>Authentication</strong>: React Context
              </li>
              <li>
                <strong>Styles</strong>: SASS
              </li>
            </ul>
          </section>
        </article>
      );

    case "campus-departures":
      return (
        <article className="description-project-wrap">

          <section className="section-item">
            <h2>Overview</h2>
            <p>
              This project is a React application designed to be displayed in
              the buildings of the Beaulieu campus at the University of Rennes.
              The application provides real-time information on bus and metro
              schedules at the various stops around the campus, as well as
              information on the availability of bicycles and free spaces at the
              bike stations located on the campus. It processes this data and
              displays upcoming departures, bicycle availability, and other
              relevant information to keep students informed about their
              commuting options and enhance their travel experience.
            </p>
          </section>

          <section className="section-item">
            <h2>Features</h2>
            <ul>
              <li>
                <strong>Real-time Data Fetching</strong>: Retrieves bus, metro,
                and bike station data from STAR's API.
              </li>
              <li>
                <strong>Component-based Architecture</strong>: Uses reusable
                React components for different parts of the user interface.
              </li>
              <li>
                <strong>Minimalist Design</strong>: The interface is designed to
                be clean and minimalist, focusing on essential information.
              </li>
              <li>
                <strong>Error Handling</strong>: Includes robust error handling
                for API requests and data processing.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Project Structure</h2>
            <p>The project structure is as follows:</p>
            <ul>
              <li>
                <strong>`src`</strong>: Contains the main application code.
                <ul>
                  <li>
                    <strong>`components`</strong>: React components used in the
                    application.
                  </li>
                  <li>
                    <strong>`utils`</strong>: Utility functions and context
                    providers.
                  </li>
                  <li>
                    <strong>`Dashboard.tsx`</strong>: Main application
                    component.
                  </li>
                  <li>
                    <strong>`index.tsx`</strong>: Entry point of the
                    application.
                  </li>
                </ul>
              </li>
              <li>
                <strong>`public`</strong>: Contains static assets like the
                `index.html` file.
              </li>
              <li>
                <strong>`styles`</strong>: CSS or SCSS files for styling the
                application.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>API Endpoints</h2>
            <p>The application fetches data from the following endpoints:</p>
            <ul>
              <li>
                <strong>Bus Data:</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STAR Bus API
                </a>
              </li>
              <li>
                <strong>Metro Data:</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-metro-circulation-deux-prochains-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STAR Metro API
                </a>
              </li>
              <li>
                <strong>Bike Station Data:</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/vls-stations-etat-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STAR Bike Station API
                </a>
              </li>
            </ul>
          </section>
        </article>
      );

    case "portfolio":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Overview</h2>
            <p>
              This portfolio is a personal project built using React, designed
              to present my skills, projects, and experience in web development.
              The portfolio serves as my digital business card, aimed at helping
              potential employers or collaborators explore my expertise in
              front-end and back-end technologies.
            </p>
            <p>
              The goal of this project is to create a clean, visually appealing,
              and professional space where my work is showcased in an intuitive
              and engaging manner. I've carefully designed this portfolio to
              ensure that it not only highlights my technical skills but also
              demonstrates my understanding of user experience and design
              aesthetics. The modern, responsive interface adapts to different
              screen sizes, ensuring accessibility across all devices.
            </p>
            <p>
              This project highlights my ability to handle both the creative and
              technical sides of web development, from interactive front-end
              interfaces to connecting with back-end systems through APIs.
              Furthermore, it offers employers a comprehensive insight into my
              expertise, including a downloadable resume and a showcase of my
              completed and ongoing projects.
            </p>
          </section>

          <section className="section-item">
            <h2>Features</h2>
            <ul>
              <li>
                <strong>Project Showcase</strong>: Display detailed information
                about various projects I've worked on, including descriptions,
                technologies used, and links to live demos or repositories.
              </li>
              <li>
                <strong>Responsive Design</strong>: Fully responsive design
                ensuring a smooth user experience on all devices, including
                desktops, tablets, and smartphones.
              </li>
              <li>
                <strong>Interactive UI</strong>: Built with React, the interface
                is interactive and dynamic, offering smooth navigation and user
                engagement.
              </li>
              <li>
                <strong>Multi-language Support</strong>: Users can switch
                between English and French for a bilingual experience.
              </li>
              <li>
                <strong>Resume Download</strong>: Potential employers can easily
                download my resume in PDF format directly from the portfolio.
              </li>
            </ul>
          </section>
          <section className="section-item">
            <h2>Technologies Used</h2>
            <ul>
              <li>
                <strong>Front End</strong>: React
              </li>
              <li>
                <strong>Styling</strong>: SCSS
              </li>
              <li>
                <strong>Animations</strong>: Framer Motion
              </li>
            </ul>
          </section>
        </article>
      );

    case "keops":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Overview</h2>
            <p>
              KEOPS is an immersive escape game experience set in an alternate
              universe inspired by the Great Pyramid of Giza, also known as the
              Pyramid of Khufu or Keops. Your objective is to escape this
              mysterious world by solving puzzles and deciphering a secret code.
              Test your wits and embark on a thrilling adventure!
            </p>
          </section>

          <section className="section-item">
            <h2>Key Features:</h2>
            <ul>
              <li>
                Engaging storyline set in a historic and enigmatic environment.
              </li>
              <li>Multiple puzzles and quests that increase in difficulty.</li>
              <li>Rich graphics and soundscapes to enhance immersion.</li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Documentation</h2>
            <p>
              For more detailed information about KEOPS, including game
              mechanics, tips, and troubleshooting, please refer to the official{" "}
              <a
                href="/projects/keops/Documentation-KEOPS.pdf"
                target="blank"
              >
                documentation
              </a>
              .
            </p>
          </section>
        </article>
      );

    default:
      return <div></div>;
  }
};

export default DescriptionProjectEN;
