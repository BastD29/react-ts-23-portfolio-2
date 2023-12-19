import { FC } from "react";

import styles from "./Card.module.scss";

type CardProps = {};

const Card: FC<CardProps> = ({}) => {
  return (
    <div className={styles["card"]}>
      <h1>Card</h1>
    </div>
  );
};

export { Card };
