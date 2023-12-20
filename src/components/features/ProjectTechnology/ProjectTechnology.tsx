import { FC } from "react";

import { Project } from "../../../models/Project";

import i18n from "../../../i18n/i18n";

import styles from "./ProjectTechnology.module.scss";

type ProjectTechnologyProps = {
  project: Project;
};

const DetailParagraph: FC<{ titleKey: string; content: string | string[] }> = ({
  titleKey,
  content,
}) => (
  <div className={styles["project-detail__paragraph"]}>
    <h3>{i18n.t(`dashboard.project.projectDetail.${titleKey}`)}</h3>
    <p>{content}</p>
  </div>
);

const ProjectTechnology: FC<ProjectTechnologyProps> = ({ project }) => {
  const detailSections = [
    { key: "languages", content: project?.languages },
    { key: "side", content: project?.side },
    { key: "stack", content: project?.stack },
  ];
  return (
    <div className={styles["project-technology"]}>
      {detailSections.map(({ key, content }) =>
        content ? (
          <DetailParagraph key={key} titleKey={key} content={content} />
        ) : null
      )}
    </div>
  );
};

export { ProjectTechnology };
