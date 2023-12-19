import { FC } from "react";

import styles from "./Home.module.scss";

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={styles["home"]}>
      <h1>Home</h1>
    </div>
  );
};

export { Home };
