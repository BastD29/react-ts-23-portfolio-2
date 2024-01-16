import { FC, useState } from "react";

import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";

import { FilterMenu } from "../FilterMenu/FilterMenu";

import i18n from "../../../i18n/i18n";

import { MdFilterAlt } from "react-icons/md";

import { useGetProjectsQuery } from "../../../store/project/apiSlice";

import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./FilterBar.module.scss";

type FilterBarProps = {};

const FilterBar: FC<FilterBarProps> = ({}) => {
  const { theme } = useTheme();

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const filter = useSelector((state: RootState) => state.filter.filter);

  const {
    data: projects,
    // error: projectsError,
    // isLoading: projectsIsLoading,
  } = useGetProjectsQuery(filter);

  const isFilterSelected = Object.values(filter).some((value) => value);

  const filterButtonStyles = isFilterSelected
    ? `${styles["filter-bar__filterBtn"]} ${styles["selected"]}`
    : styles["filter-bar__filterBtn"];

  const buttonColor = isFilterSelected ? "white" : "black";
  const iconColor = isFilterSelected ? "white" : "black";

  return (
    <div className={styles["filter-bar"]}>
      <span
        className={`${styles["filter-bar__count"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {projects && projects.length}{" "}
        {i18n.t("dashboard.project.projectsList.projectNumber")}
      </span>
      <Button
        icon={<Icon IconType={MdFilterAlt} color={iconColor} />}
        onClick={toggleFilterMenu}
        className={filterButtonStyles}
        text="Filter"
        color={buttonColor}
      />

      {isFilterMenuOpen && <FilterMenu toggleFilterMenu={toggleFilterMenu} />}
    </div>
  );
};

export { FilterBar };
