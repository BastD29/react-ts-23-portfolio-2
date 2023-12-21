import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useGetProjectByIdQuery } from "../../../store/project/apiSlice";

import { ProjectTechnology } from "../ProjectTechnology/ProjectTechnology";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";

import { Icon } from "../../shared/Icon/Icon";
import { Button } from "../../shared/Button/Button";

import { IoArrowBack } from "react-icons/io5";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./ProjectDetail.module.scss";

type ProjectDetailProps = {};

const ProjectDetail: FC<ProjectDetailProps> = ({}) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "black" : "white";

  const {
    data: project,
    error: projectError,
    isLoading: projectIsLoading,
  } = useGetProjectByIdQuery(projectId);

  if (projectIsLoading) return <div>Loading...</div>;
  if (projectError) return <div>Error occurred: {projectError.toString()}</div>;

  return (
    <div
      className={`${styles["project-detail"]} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <Button
        icon={<Icon IconType={IoArrowBack} color={iconColor} />}
        onClick={() => navigate(-1)}
        text="Go back"
        className={`${styles["project-detail__goBackBtn"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
        color={iconColor}
      />

      {project && (
        <>
          <div className={styles["project-detail__hero"]}>
            <img
              src={project.image}
              alt={project.title}
              className={styles["project-detail__image"]}
            />
          </div>
          <div className={styles["project-detail__content"]}>
            <ProjectInfo project={project} />
            <ProjectTechnology project={project} />
          </div>
        </>
      )}
    </div>
  );
};

export { ProjectDetail };
