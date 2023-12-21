import { FC, ReactElement, useRef } from "react";

import { MdAlbum, MdClose } from "react-icons/md";

import { Icon } from "../../shared/Icon/Icon";
import { Button } from "../../shared/Button/Button";
import { Navbar } from "../../shared/Navbar/Navbar";

import { homepageLinks } from "../../../constants/links";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./MobileMenu.module.scss";
import useOutsideClick from "../../../hooks/useOutsideClick";

type MobileMenuProps = {
  icon?: ReactElement;
  className?: string;
  isMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({
  className,
  icon,
  isMenuOpen,
  toggleMobileMenu,
}) => {
  if (!isMenuOpen) return null;

  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "black" : "white";

  const menuRef = useRef(null);
  useOutsideClick(menuRef, toggleMobileMenu);

  return (
    <div
      ref={menuRef}
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
