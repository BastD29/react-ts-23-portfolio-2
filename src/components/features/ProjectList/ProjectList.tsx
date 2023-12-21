import { FC, ReactElement, useState } from "react";

import { useGetProjectsQuery } from "../../../store/project/apiSlice";

import { ProjectCard } from "../ProjectCard/ProjectCard";
import { FilterMenu } from "../FilterMenu/FilterMenu";

import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";

import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";

import i18n from "../../../i18n/i18n";

import { MdFilterAlt } from "react-icons/md";

import styles from "./ProjectList.module.scss";

type ProjectListProps = {};

const ProjectList: FC<ProjectListProps> = ({}) => {
  const filter = useSelector((state: RootState) => state.filter.filter);
  // console.log("filter:", filter);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

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

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
    // console.log("toggleFilterMenu clicked");
  };

  return (
    <div className={styles["project-list"]}>
      <div className={styles["project-list__info"]}>
        <span>
          {projects && projects.length}{" "}
          {i18n.t("dashboard.project.projectsList.projectNumber")}
        </span>
        <Button
          icon={<Icon IconType={MdFilterAlt} color="white" />}
          onClick={toggleFilterMenu}
          className={styles["project-list__filterBtn"]}
          text="Filter"
          color="white"
        />
      </div>
      {isFilterMenuOpen && (
        <FilterMenu
          toggleFilterMenu={toggleFilterMenu}
          className={styles["project-list__filterMenu"]}
        />
      )}
      <div className={styles["project-list__list"]}>
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.projectId} />
        ))}
      </div>
    </div>
  );
};

export { ProjectList };
