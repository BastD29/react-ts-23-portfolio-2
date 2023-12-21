import { FC, ReactNode, SelectHTMLAttributes } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Select.module.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  id: string;
  children: ReactNode;
  className?: string;
};

const Select: FC<SelectProps> = ({
  name,
  id,
  children,
  className,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <select
      name={name}
      id={id}
      {...props}
      className={`${styles["button"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    >
      {children}
    </select>
  );
};

export { Select };
