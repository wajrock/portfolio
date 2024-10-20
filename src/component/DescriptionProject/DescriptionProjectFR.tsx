import React, { FunctionComponent } from "react";
import "./DescriptionProject.scss";

const DescriptionProjectFR: FunctionComponent<{ idProject: string }> = ({
  idProject,
}) => {
  switch (idProject) {
    case "the-players-journal":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Présentation</h2>
            <p>
              Ce projet est une plateforme communautaire où les utilisateurs
              peuvent lire des articles sur leurs jeux vidéo préférés, laisser
              des commentaires et interagir avec d'autres gamers. Construit avec
              React pour le front-end et une API PHP basique pour le back-end,
              le site offre une expérience utilisateur robuste et interactive.
            </p>
          </section>

          <section className="section-item">
            <h2>Fonctionnalités</h2>
            <ul>
              <li>
                <strong>Authentification des utilisateurs</strong> : Système de
                connexion et d'inscription sécurisé avec chiffrement des mots de
                passe.
              </li>
              <li>
                <strong>Sécurité des données</strong> : Mise en œuvre de mesures
                anti-injection pour les requêtes du back-end.
              </li>
              <li>
                <strong>Design immersif</strong> : Un design visuellement
                attrayant qui s'aligne avec l'esthétique des jeux vidéo.
              </li>
              <li>
                <strong>Stockage et mise en cache</strong> : Gestion efficace
                des données pour une récupération et un stockage optimisés.
              </li>
              <li>
                <strong>Images responsives</strong> : Les images sont adaptées à
                différentes tailles d'écran pour améliorer les performances.
              </li>
              <li>
                <strong>Système collaboratif</strong> : Les utilisateurs peuvent
                partager leurs opinions à travers un système de critique.
              </li>
              <li>
                <strong>Design réactif</strong> : Le site est entièrement
                réactif, s'adaptant parfaitement aux smartphones, tablettes et
                ordinateurs de bureau.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Structure de l'API</h2>
            <p>
              L'API est structurée avec les points de terminaison suivants :
            </p>
            <ul>
              <li>
                <strong>`/article`</strong> : Récupérer, modifier, supprimer ou
                ajouter des articles par ID.
              </li>
              <li>
                <strong>`/articles`</strong> : Récupérer plusieurs articles avec
                des options de filtrage basées sur des mots-clés.
              </li>
              <li>
                <strong>`/games`</strong> : Accéder aux données liées à divers
                jeux vidéo.
              </li>
              <li>
                <strong>`/reviews`</strong> : Récupérer, publier ou supprimer
                des critiques pour les articles.
              </li>
              <li>
                <strong>`/images`</strong> : Gérer les téléchargements,
                modifications et récupérations d'images.
              </li>
              <li>
                <strong>`/users`</strong> : Accéder et gérer les informations
                des utilisateurs pour la connexion et l'inscription.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Technologies utilisées</h2>
            <ul>
              <li>
                <strong>Front End</strong> : React
              </li>
              <li>
                <strong>Back End</strong> : PHP
              </li>
              <li>
                <strong>Base de données</strong> : MySQL
              </li>
              <li>
                <strong>Authentification</strong> : React Context
              </li>
              <li>
                <strong>Styles</strong> : SASS
              </li>
            </ul>
          </section>
        </article>
      );

    case "campus-departures":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Présentation</h2>
            <p>
              Ce projet est une application React conçue pour être affichée dans
              les bâtiments du campus Beaulieu à l'Université de Rennes.
              L'application fournit des informations en temps réel sur les
              horaires de bus et de métro aux différents arrêts autour du
              campus, ainsi que des informations sur la disponibilité des vélos
              et des places libres aux stations de vélos situées sur le campus.
              Elle traite ces données et affiche les départs à venir, la
              disponibilité des vélos et d'autres informations pertinentes pour
              tenir les étudiants informés de leurs options de transport et
              améliorer leur expérience de voyage.
            </p>
          </section>

          <section className="section-item">
            <h2>Fonctionnalités</h2>
            <ul>
              <li>
                <strong>Récupération de données en temps réel</strong> :
                Récupère les données de bus, de métro et de stations de vélos
                depuis l'API de STAR.
              </li>
              <li>
                <strong>Architecture basée sur les composants</strong> : Utilise
                des composants React réutilisables pour différentes parties de
                l'interface utilisateur.
              </li>
              <li>
                <strong>Design minimaliste</strong> : L'interface est conçue
                pour être propre et minimaliste, en se concentrant sur les
                informations essentielles.
              </li>
              <li>
                <strong>Gestion des erreurs</strong> : Inclut une gestion
                robuste des erreurs pour les requêtes API et le traitement des
                données.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Structure du projet</h2>
            <p>La structure du projet est la suivante :</p>
            <ul>
              <li>
                <strong>`src`</strong> : Contient le code principal de
                l'application.
                <ul>
                  <li>
                    <strong>`components`</strong> : Composants React utilisés
                    dans l'application.
                  </li>
                  <li>
                    <strong>`utils`</strong> : Fonctions utilitaires et
                    fournisseurs de contexte.
                  </li>
                  <li>
                    <strong>`Dashboard.tsx`</strong> : Composant principal de
                    l'application.
                  </li>
                  <li>
                    <strong>`index.tsx`</strong> : Point d'entrée de
                    l'application.
                  </li>
                </ul>
              </li>
              <li>
                <strong>`public`</strong> : Contient des ressources statiques
                comme le fichier `index.html`.
              </li>
              <li>
                <strong>`styles`</strong> : Fichiers CSS ou SCSS pour le style
                de l'application.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Endpoints de l'API</h2>
            <p>
              L'application récupère des données depuis les endpoints suivants :
            </p>
            <ul>
              <li>
                <strong>Données des bus :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Bus
                </a>
              </li>
              <li>
                <strong>Données du métro :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-metro-circulation-deux-prochains-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Métro
                </a>
              </li>
              <li>
                <strong>Données des stations de vélos :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/vls-stations-etat-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Stations de vélos
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
            <h2>Présentation</h2>
            <p>
              Ce projet est une application React conçue pour être affichée dans
              les bâtiments du campus de Beaulieu à l'Université de Rennes.
              L'application fournit des informations en temps réel sur les
              horaires de bus et de métro aux différents arrêts autour du
              campus, ainsi que des informations sur la disponibilité des vélos
              et des espaces libres dans les stations de vélos situées sur le
              campus. Elle traite ces données et affiche les départs à venir, la
              disponibilité des vélos et d'autres informations pertinentes pour
              tenir les étudiants informés de leurs options de transport et
              améliorer leur expérience de déplacement.
            </p>
          </section>

          <section className="section-item">
            <h2>Fonctionnalités</h2>
            <ul>
              <li>
                <strong>Récupération de données en temps réel</strong> :
                Récupère les données de bus, de métro et de stations de vélos
                via l'API STAR.
              </li>
              <li>
                <strong>Architecture basée sur des composants</strong> : Utilise
                des composants React réutilisables pour différentes parties de
                l'interface utilisateur.
              </li>
              <li>
                <strong>Design minimaliste</strong> : L'interface est conçue
                pour être propre et minimaliste, se concentrant sur les
                informations essentielles.
              </li>
              <li>
                <strong>Gestion des erreurs</strong> : Comprend une gestion
                robuste des erreurs pour les requêtes API et le traitement des
                données.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Structure du projet</h2>
            <p>La structure du projet est la suivante :</p>
            <ul>
              <li>
                <strong>`src`</strong> : Contient le code principal de
                l'application.
                <ul>
                  <li>
                    <strong>`components`</strong> : Composants React utilisés
                    dans l'application.
                  </li>
                  <li>
                    <strong>`utils`</strong> : Fonctions utilitaires et
                    fournisseurs de contexte.
                  </li>
                  <li>
                    <strong>`Dashboard.tsx`</strong> : Composant principal de
                    l'application.
                  </li>
                  <li>
                    <strong>`index.tsx`</strong> : Point d'entrée de
                    l'application.
                  </li>
                </ul>
              </li>
              <li>
                <strong>`public`</strong> : Contient des ressources statiques
                comme le fichier `index.html`.
              </li>
              <li>
                <strong>`styles`</strong> : Fichiers CSS ou SCSS pour le style
                de l'application.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Points de terminaison de l'API</h2>
            <p>
              L'application récupère des données à partir des points de
              terminaison suivants :
            </p>
            <ul>
              <li>
                <strong>Données de bus :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Bus
                </a>
              </li>
              <li>
                <strong>Données de métro :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/tco-metro-circulation-deux-prochains-passages-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Métro
                </a>
              </li>
              <li>
                <strong>Données des stations de vélos :</strong>{" "}
                <a
                  href="https://data.explore.star.fr/api/explore/v2.1/catalog/datasets/vls-stations-etat-tr/records"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API STAR Stations de Vélos
                </a>
              </li>
            </ul>
          </section>
        </article>
      );

    case "keops":
      return (
        <article className="description-project-wrap">
          <section className="section-item">
            <h2>Présentation</h2>
            <p>
              KEOPS est une expérience immersive de jeu d'évasion se déroulant
              dans un univers alternatif inspiré de la Grande Pyramide de Gizeh,
              également connue sous le nom de Pyramide de Khufu ou Keops. Votre
              objectif est de vous échapper de ce monde mystérieux en résolvant
              des énigmes et en déchiffrant un code secret. Testez votre
              ingéniosité et embarquez pour une aventure palpitante !
            </p>
          </section>

          <section className="section-item">
            <h2>Fonctionnalités clés :</h2>
            <ul>
              <li>
                Histoire captivante se déroulant dans un environnement
                historique et énigmatique.
              </li>
              <li>Multiples énigmes et quêtes dont la difficulté augmente.</li>
              <li>
                Graphismes riches et paysages sonores pour améliorer
                l'immersion.
              </li>
            </ul>
          </section>

          <section className="section-item">
            <h2>Documentation</h2>
            <p>
              Pour des informations plus détaillées sur KEOPS, y compris les
              mécaniques de jeu, des astuces et des solutions aux problèmes,
              veuillez consulter la{" "}
              <a
                href="/projects/keops/Documentation-KEOPS.pdf"
                target="blank"
              >
                documentation officielle
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

export default DescriptionProjectFR;
