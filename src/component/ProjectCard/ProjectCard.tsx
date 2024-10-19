import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "src/LanguageContext";
import "./ProjectCard.scss"

interface ProjectType {
  id: string;
  "title-project": string;
  tags: string[];
}
const ProjectCard: FunctionComponent<{
  project: ProjectType;
  additionalClass?: string[];
}> = ({ project, additionalClass }) => {
  const { currentLanguage } = useLanguage();
  return (
    <Link
      to={
        currentLanguage === "en"
          ? `/project/${project.id}`
          : `/projet/${project.id}`
      }
      className={`project-card-wrap ${additionalClass?.join(" ")}`}
      state={{loadTop:true}}
    >
      <div className={`project-card-wrap-cover`}>
        <img
          src={`${process.env.PUBLIC_URL}/projects/${project.id}/cover.webp`}
          alt=""
        />
      </div>
      <div className="project-card-wrap-description description">
      <p className="description-title">{project["title-project"]}</p>
        <div className="description-tags">
        {
            project.tags.map(tag => (
                <div className="description-tags-item">{tag}</div>
            ))
        }
        </div>
      
      </div>
    </Link>
  );
};

export default ProjectCard;
