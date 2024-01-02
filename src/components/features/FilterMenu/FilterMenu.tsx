import { FC } from "react";

import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";
import { Filter } from "../../shared/Filter/Filter";

import { MdClose } from "react-icons/md";

import { useTheme } from "../../../contexts/ThemeContext";

import i18n from "../../../i18n/i18n";

import styles from "./FilterMenu.module.scss";

type FilterMenuProps = {
  className?: string;
  toggleFilterMenu: () => void;
};

const FilterMenu: FC<FilterMenuProps> = ({ className, toggleFilterMenu }) => {
  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "black" : "white";

  return (
    <div
      // ref={menuRef}
      className={`${styles["filter-menu"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <div
        className={`${styles["filter-menu__header"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        <h2
          className={`${styles["filter-menu__title"]} ${
            theme === "dark" ? styles["dark"] : styles["light"]
          }`}
        >
          {i18n.t("dashboard.filter.filterBy") as string}
        </h2>
        <Button
          icon={<Icon IconType={MdClose} color={iconColor} />}
          onClick={toggleFilterMenu}
        />
      </div>
      <Filter />
    </div>
  );
};

export { FilterMenu };
