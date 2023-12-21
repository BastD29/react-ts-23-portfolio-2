import { FC } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../../store/filter/slice";

import { RootState } from "../../../store/store";

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
    // const newValue = e.target.value;
    // console.log("Current Input:", newValue);

    dispatch(
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div
      className={`${styles["filter"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <h4
        className={`${styles["filter__select"]} ${className || ""} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        Languages
      </h4>
      <select name="language" id="language" onChange={handleInputChange}>
        <option value="">Select language</option>
      </select>
    </div>
  );
};

export { Filter };
