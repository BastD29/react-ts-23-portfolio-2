import { FC } from "react";

import { MdOutlineSearch } from "react-icons/md";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Icon } from "../Icon/Icon";

import { useTheme } from "../../../contexts/ThemeContext";

import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../../store/filter/slice";

import { RootState } from "../../../store/store";

import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  className?: string;
};

const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  const filter = useSelector((state: RootState) => state.filter.filter);
  // console.log("filter:", filter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={`${styles["search-bar"]} ${className || ""} `}>
      <Input
        placeholder="Search..."
        className={`${styles["search-bar__input"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
        onChange={handleInputChange}
        name="title"
      />
      <Button
        icon={<Icon IconType={MdOutlineSearch} color="white" />}
        backgroundColor="black"
        className={`${styles["search-bar__button"]} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      />
    </div>
  );
};

export { SearchBar };
