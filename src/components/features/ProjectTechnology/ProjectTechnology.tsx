import { FC } from "react";

import { Project } from "../../../models/Project";

import { DetailParagraph } from "../DetailParagraph/DetailParagraph";

import styles from "./ProjectTechnology.module.scss";

type ProjectTechnologyProps = {
  project: Project;
};

const ProjectTechnology: FC<ProjectTechnologyProps> = ({ project }) => {
  const detailSections = [
    { key: "languages", content: project?.languages },
    { key: "side", content: project?.side },
    { key: "stack", content: project?.stack },
    { key: "styles", content: project?.styles },
    { key: "componentLibraries", content: project?.componentLibraries },
    { key: "frameworks", content: project?.frameworks },
    { key: "functionalities", content: project?.functionalities },
    { key: "startDate", content: project?.startDate },
    { key: "endDate", content: project?.endDate },
    { key: "status", content: project?.status },
    // { key: "hooks", content: project?.hooks },
    // { key: "website", content: project?.website },
    // { key: "github", content: project?.github },
  ];
  return (
    <div className={styles["project-technology"]}>
      {detailSections.map(({ key, content }) =>
        (
          Array.isArray(content)
            ? content.some((item) => item.trim() !== "")
            : content
        ) ? (
          <DetailParagraph key={key} titleKey={key} content={content} />
        ) : null
      )}
    </div>
  );
};

export { ProjectTechnology };
