import { FC } from "react";

import { useGetProjectsQuery } from "../../../store/project/apiSlice";

import { ProjectCard } from "../ProjectCard/ProjectCard";

import styles from "./ProjectList.module.scss";

type ProjectListProps = {};

const ProjectList: FC<ProjectListProps> = ({}) => {
  const {
    data: projects,
    error: projectsError,
    isLoading: projectsIsLoading,
  } = useGetProjectsQuery();

  if (projectsIsLoading) return <div>Loading...</div>;
  if (projectsError)
    return <div>Error occurred: {projectsError.toString()}</div>;

  return (
    <div className={styles["project-list"]}>
      {projects?.map((project) => (
        <ProjectCard project={project} key={project.projectId} />
      ))}
    </div>
  );
};

export { ProjectList };
