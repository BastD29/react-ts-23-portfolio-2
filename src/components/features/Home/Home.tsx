import { FC } from "react";

import homeImage from "../../../assets/images/IMG_0579_reduced.jpg";

import i18n from "../../../i18n/i18n";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Home.module.scss";

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  const { theme } = useTheme();

  return (
    <div className={styles["home"]}>
      <img src={homeImage} alt="home-image" className={styles["home__image"]} />
      <div
        className={`${styles["home__description"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        <p>{i18n.t("home.presentation")}</p>
        <br />
        <p>{i18n.t("home.projects")}</p>
      </div>
    </div>
  );
};

export { Home };
