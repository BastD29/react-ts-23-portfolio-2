import { FC } from "react";

import { useGetProjectsQuery } from "../../../store/project/apiSlice";

import { ProjectCard } from "../ProjectCard/ProjectCard";

import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";

import i18n from "../../../i18n/i18n";

import styles from "./ProjectList.module.scss";

type ProjectListProps = {};

const ProjectList: FC<ProjectListProps> = ({}) => {
  const filter = useSelector((state: RootState) => state.filter.filter);

  const {
    data: projects,
    error: projectsError,
    isLoading: projectsIsLoading,
  } = useGetProjectsQuery(filter);

  if (projectsIsLoading) return <div>Loading...</div>;

  if (projectsError)
    return <div>Error occurred: {projectsError.toString()}</div>;

  if (projects && projects.length === 0) {
    return <div>{i18n.t("dashboard.project.projectsList.noProjectFound")}</div>;
  }

  return (
    <div className={styles["project-list"]}>
      {projects?.map((project) => (
        <ProjectCard project={project} key={project.projectId} />
      ))}
    </div>
  );
};

export { ProjectList };
