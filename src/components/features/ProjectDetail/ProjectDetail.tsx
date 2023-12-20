import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useGetProjectByIdQuery } from "../../../store/project/apiSlice";

import { ProjectTechnology } from "../ProjectTechnology/ProjectTechnology";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";

import styles from "./ProjectDetail.module.scss";

type ProjectDetailProps = {};

const ProjectDetail: FC<ProjectDetailProps> = ({}) => {
  // const navigate = useNavigate();

  const { projectId } = useParams();

  const {
    data: project,
    error: projectError,
    isLoading: projectIsLoading,
  } = useGetProjectByIdQuery(projectId);

  if (projectIsLoading) return <div>Loading...</div>;
  if (projectError) return <div>Error occurred: {projectError.toString()}</div>;

  return (
    <div className={styles["project-detail"]}>
      {/* //*transform this list with small cards */}

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
