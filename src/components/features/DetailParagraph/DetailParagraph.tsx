import { FC } from "react";

import i18n from "../../../i18n/i18n";

import styles from "./DetailParagraph.module.scss";
import { useTheme } from "../../../contexts/ThemeContext";

type DetailParagraphProps = {
  titleKey: string;
  content: string | string[] | Date | undefined;
};

const DetailParagraph: FC<DetailParagraphProps> = ({ titleKey, content }) => {
  const { theme } = useTheme();

  let displayContent;

  console.log("content:", content);

  if (content instanceof Date) {
    displayContent = content.toLocaleDateString();
  } else {
    displayContent = content;
  }

  return (
    <div className={styles["detail-paragraph"]}>
      <h3
        className={`${styles["detail-paragraph__title"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {i18n.t(`dashboard.project.projectDetail.${titleKey}`)}
      </h3>
      <div
        className={`${styles["detail-paragraph__tag"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {displayContent}
      </div>
    </div>
  );
};

export { DetailParagraph };
