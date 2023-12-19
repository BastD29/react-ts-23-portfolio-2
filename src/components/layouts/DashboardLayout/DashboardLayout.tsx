import { homepageLinks } from "../../../constants/links";

import { Button } from "../../shared/Button/Button";
import { Header } from "../../shared/Header/Header";
import { Navbar } from "../../shared/Navbar/Navbar";
import { Icon } from "../../shared/Icon/Icon";
import { SearchBar } from "../../shared/SearchBar/SearchBar";
import { Content } from "../../shared/Content/Content";

import { BaseLayout } from "../BaseLayout/BaseLayout";

import { MobileMenu } from "../../features/MobileMenu/MobileMenu";

import {
  MdMenu,
  MdModeNight,
  MdOutlineWbSunny,
  MdAlbum,
  MdOutlineSearch,
} from "react-icons/md";

import { useState } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import { Outlet } from "react-router-dom";

import styles from "./DashboardLayout.module.scss";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useTheme();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const searchBarElement = showSearchBar ? <SearchBar /> : undefined;

  const searchButtonElement = !showSearchBar ? (
    <Button
      icon={<Icon IconType={MdOutlineSearch} />}
      onClick={toggleSearchBar}
      className={styles["search-button"]}
    />
  ) : undefined;

  const darkModeIcon =
    theme === "light" ? (
      <Icon IconType={MdModeNight} />
    ) : (
      <Icon IconType={MdOutlineWbSunny} />
    );

  return (
    <BaseLayout className={styles["dashboard-layout"]}>
      <Header
        className={styles["dashboard-layout__header"]}
        icon={<Icon IconType={MdAlbum} />}
        navbar={
          <Navbar
            links={homepageLinks}
            className={`${styles["header-navbar"]} ${
              theme === "dark" ? styles["dark"] : styles["light"]
            }`}
          />
        }
        mobileMenu={
          <MobileMenu
            className={`${styles["mobile-menu"]} ${
              theme === "dark" ? styles["dark"] : styles["light"]
            }`}
            isMenuOpen={isMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        }
        searchBar={searchBarElement}
        buttons={[
          searchButtonElement,
          <Button
            icon={<Icon IconType={MdMenu} />}
            onClick={toggleMobileMenu}
            className={styles["menu-button"]}
          />,
          <Button icon={darkModeIcon} onClick={toggleTheme} />,
        ]}
      />
      <Content
        className={`${styles["dashboard-layout__content"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        <Outlet />
      </Content>
    </BaseLayout>
  );
};

export { DashboardLayout };
