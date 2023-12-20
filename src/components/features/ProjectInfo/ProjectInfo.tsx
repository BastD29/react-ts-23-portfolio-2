import { FC } from "react";

import { Project } from "../../../models/Project";

import styles from "./ProjectInfo.module.scss";

type ProjectInfoProps = {
  project: Project;
};

const ProjectInfo: FC<ProjectInfoProps> = ({ project }) => {
  return (
    <div className={styles["project-info"]}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export { ProjectInfo };
