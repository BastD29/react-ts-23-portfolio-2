import { FC } from "react";

import { FilterBar } from "../FilterBar/FilterBar";
import { ProjectList } from "../ProjectList/ProjectList";

import styles from "./Projects.module.scss";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className={styles["projects"]}>
      <FilterBar />
      <ProjectList />
    </div>
  );
};

export { Projects };
