import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "../../../contexts/ThemeContext";

import { RootState } from "../../../store/store";

import { resetFilter, setFilter } from "../../../store/filter/slice";

import { useGetOptionsQuery } from "../../../store/project/apiSlice";

import { FilterElement } from "../FilterElement/FilterElement";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

import { filters } from "../../../constants/filters";

import { RxReset } from "react-icons/rx";

import styles from "./Filter.module.scss";

type FilterProps = {
  className?: string;
};

const Filter: FC<FilterProps> = ({ className }) => {
  const dispatch = useDispatch();

  const { theme } = useTheme();

  const filter = useSelector((state: RootState) => state.filter.filter);
  console.log("filter:", filter);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleResetFilters = () => {
    dispatch(resetFilter());
  };

  const {
    data: options,
    // error: optionError,
    // isLoading: optionLoading,
  } = useGetOptionsQuery();

  console.log("options:", options);

  return (
    <div
      className={`${styles["filter"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      {filters.map((filterType) => (
        <FilterElement
          key={filterType.key}
          className={className}
          theme={theme}
          labelKey={filterType.label}
          selectName={filterType.key}
          selectValue={filter[filterType.key] || ""}
          options={options?.[filterType.optionsKey] || []}
          onChange={handleInputChange}
          selectLabel={filterType.selectLabel}
        />
      ))}

      <Button
        onClick={handleResetFilters}
        icon={<Icon IconType={RxReset} color="black" />}
        className={styles["filter__button"]}
        text="Reset filters"
        color="black"
      />
    </div>
  );
};

export { Filter };
