import { FC } from "react";

import styles from "./Contact.module.scss";

type ContactProps = {};

const Contact: FC<ContactProps> = ({}) => {
  return (
    <div className={styles["contact"]}>
      <h1>Contact</h1>
    </div>
  );
};

export { Contact };
