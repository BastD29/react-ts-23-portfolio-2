import { FC, ReactNode } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Content.module.scss";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Content: FC<ContentProps> = ({ children, className }) => {
  const { theme } = useTheme();

  return (
    <main
      className={`${styles["content"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      {children}
    </main>
  );
};

export { Content };
