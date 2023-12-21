import { FC } from "react";

import { Project } from "../../../models/Project";

import { Icon } from "../../shared/Icon/Icon";

import { IoLogoGithub } from "react-icons/io";

import { Link } from "react-router-dom";

import i18n from "../../../i18n/i18n";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div className={styles["project-card"]}>
      <img
        src={project.image}
        alt={project.title}
        className={styles["project-card__image"]}
      />
      <div
        className={`${styles["project-card__content"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        <h3>{project.title}</h3>
        <div className={styles["project-card__actions"]}>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <Icon IconType={IoLogoGithub} />
          </a>
          <Link to={`/projects/${project._id}`}>
            <p>{i18n.t("dashboard.project.projectCard.detailBtn") as string}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
