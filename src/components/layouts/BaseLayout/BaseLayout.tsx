import { FC, ReactNode } from "react";

import styles from "./BaseLayout.module.scss";

type BaseLayoutProps = {
  children: ReactNode;
  className?: string;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <div className={`${styles["base-layout"]} ${className || ""} `}>
      {children}
    </div>
  );
};

export { BaseLayout };
