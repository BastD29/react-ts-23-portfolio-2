import { FC } from "react";

import styles from "./About.module.scss";

type AboutProps = {};

const About: FC<AboutProps> = ({}) => {
  return (
    <div className={styles["about"]}>
      <h1>About</h1>
    </div>
  );
};

export { About };
