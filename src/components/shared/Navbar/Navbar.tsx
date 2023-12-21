import { FC } from "react";

import { NavLink } from "react-router-dom";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Navbar.module.scss";

type Link = {
  title: string;
  path: string;
};

type NavbarProps = {
  links: Link[];
  className?: string;
  onLinkClick?: () => void;
};

const Navbar: FC<NavbarProps> = ({ links, className, onLinkClick }) => {
  const { theme } = useTheme();
  // console.log("theme:", theme);

  return (
    <nav className={`${styles["navbar"]} ${className || ""} `}>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.path}
              className={theme === "dark" ? styles["dark"] : styles["light"]}
              onClick={onLinkClick}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
