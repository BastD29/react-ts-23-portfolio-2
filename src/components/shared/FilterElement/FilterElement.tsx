import { FC } from "react";

import i18n from "../../../i18n/i18n";

import styles from "./FilterElement.module.scss";

type FilterElementProps = {
  className?: string;
  theme: string;
  labelKey: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectName: string;
  selectValue: string;
  selectLabel: string;
};

const FilterElement: FC<FilterElementProps> = ({
  className,
  theme,
  labelKey,
  options,
  onChange,
  selectName,
  selectValue,
  selectLabel,
}) => {
  return (
    <div
      className={`${styles["filter-element"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      <h4
        className={`${styles["filter-element__select"]} ${className || ""} ${
          theme === "dark" ? styles["dark"] : styles["light"]
        }`}
      >
        {i18n.t(labelKey) as string}
      </h4>
      <select
        name={selectName}
        id={selectName}
        onChange={onChange}
        value={selectValue || ""}
      >
        <option value="">
          {/* {i18n.t(`dashboard.filter.filterSelect.select${labelKey}`) as string} */}
          {i18n.t(selectLabel) as string}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export { FilterElement };
