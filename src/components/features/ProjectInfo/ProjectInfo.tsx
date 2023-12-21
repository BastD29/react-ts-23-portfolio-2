import { FC } from "react";

import { Project } from "../../../models/Project";

import styles from "./ProjectInfo.module.scss";
import { useTheme } from "../../../contexts/ThemeContext";

type ProjectInfoProps = {
  project: Project;
};

const ProjectInfo: FC<ProjectInfoProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles["project-info"]} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <h1
        className={`${styles["project-info__title"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {project.title}
      </h1>
      <p
        className={`${styles["project-info__description"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {project.description}
      </p>
    </div>
  );
};

export { ProjectInfo };
