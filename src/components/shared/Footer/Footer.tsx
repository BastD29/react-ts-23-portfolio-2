import { FC, HTMLAttributes, ReactNode } from "react";

import styles from "./Footer.module.scss";

type FooterProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};

const Footer: FC<FooterProps> = ({ children, className }) => {
  return (
    <footer className={`${styles["footer"]} ${className || ""}`}>
      {children}
    </footer>
  );
};

export { Footer };
