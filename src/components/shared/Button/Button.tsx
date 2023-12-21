import { ButtonHTMLAttributes, FC, ReactElement } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Button.module.scss";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  text?: string;
  className?: string;
  backgroundColor?: string;
  color?: string;
};

const Button: FC<ButtonProps> = ({
  icon,
  text,
  className,
  backgroundColor,
  color,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={`${styles["button"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
      style={{ backgroundColor, color }}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};

export { Button };
