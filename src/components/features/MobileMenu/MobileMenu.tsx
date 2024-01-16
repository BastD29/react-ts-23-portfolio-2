import { FC, ReactElement } from "react";

import { MdAlbum, MdClose } from "react-icons/md";

import { homepageLinks } from "../../../constants/links";

import { useTheme } from "../../../contexts/ThemeContext";

import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";
import { Navbar } from "../../shared/Navbar/Navbar";

import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  icon?: ReactElement;
  className?: string;
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({
  className,
  isMenuOpen,
  toggleMobileMenu,
}) => {
  if (!isMenuOpen) return null;

  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "black" : "white";

  return (
    <div
      className={`${styles["mobile-menu"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <div
        className={`${styles["mobile-menu__header"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        <Button icon={<Icon IconType={MdAlbum} color={iconColor} />} />
        <Button
          icon={<Icon IconType={MdClose} color={iconColor} />}
          onClick={toggleMobileMenu}
        />
      </div>
      <Navbar
        links={homepageLinks}
        className={`${styles["mobile-menu__navbar"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
        onLinkClick={toggleMobileMenu}
      />
    </div>
  );
};

export { MobileMenu };
