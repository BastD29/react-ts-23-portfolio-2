import { FC, Fragment, HTMLAttributes, ReactElement, ReactNode } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { HOME } from "../../../constants/routes";

type HeaderProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  navbar?: ReactNode;
  // button1?: ReactNode;
  // button2?: ReactNode;
  buttons?: ReactNode[];
  className?: string;
  icon?: ReactElement;
  searchBar?: ReactElement;
  mobileMenu?: ReactElement;
};

const Header: FC<HeaderProps> = ({
  title,
  navbar,
  buttons,
  className,
  icon,
  searchBar,
  mobileMenu,
}) => {
  const { theme } = useTheme();
  // console.log("theme:", theme);

  return (
    <header
      className={`${styles["header"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <div className={styles["header__left"]}>
        {icon && <Link to={HOME}>{icon}</Link>}
        {navbar}
      </div>
      <div className={styles["header__buttons"]}>
        {mobileMenu}
        {searchBar}
        {/* {buttons && buttons.map((button) => button)} */}
        {buttons &&
          buttons.map((button, index) => (
            <Fragment key={index}>{button}</Fragment>
          ))}
      </div>
    </header>
  );
};

export { Header };
