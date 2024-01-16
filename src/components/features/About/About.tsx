import { FC } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaAngular,
  FaNode,
  FaGit,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

import i18n from "../../../i18n/i18n";

import { Icon } from "../../shared/Icon/Icon";

import styles from "./About.module.scss";

type AboutProps = {};

const About: FC<AboutProps> = ({}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles["about"]} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <h1>{i18n.t("about.title")}</h1>
      <div className={styles["about__subpart"]}>
        <h3>{i18n.t("about.frontend")}</h3>
        <div className={styles["about__icons"]}>
          <Icon IconType={FaHtml5} size={50} />
          <Icon IconType={FaCss3} size={50} />
          <Icon IconType={FaSass} size={50} />
        </div>
      </div>
      <hr />
      <div className={styles["about__subpart"]}>
        <h3>{i18n.t("about.libraries")}</h3>
        <div className={styles["about__icons"]}>
          <Icon IconType={FaReact} size={50} />
          <Icon IconType={FaAngular} size={50} />
          <Icon IconType={SiRedux} size={45} />
        </div>
      </div>
      <hr />
      <div className={styles["about__subpart"]}>
        <h3>{i18n.t("about.backend")}</h3>
        <div className={styles["about__icons"]}>
          <Icon IconType={FaNode} size={50} />
          <Icon IconType={SiExpress} size={45} />
          <Icon IconType={SiFirebase} size={45} />
        </div>
      </div>
      <hr />
      <div className={styles["about__subpart"]}>
        <h3>{i18n.t("about.languages")}</h3>
        <div className={styles["about__icons"]}>
          <Icon IconType={SiJavascript} size={45} />
          <Icon IconType={SiTypescript} size={45} />
        </div>
      </div>
      <hr />
      <div className={styles["about__subpart"]}>
        <h3>{i18n.t("about.versionControl")}</h3>
        <div className={styles["about__icons"]}>
          <Icon IconType={FaGit} size={45} />
        </div>
      </div>
    </div>
  );
};

export { About };
