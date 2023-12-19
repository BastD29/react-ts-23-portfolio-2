import { ComponentType, FC } from "react";

import { useTheme } from "../../../contexts/ThemeContext";

import styles from "./Icon.module.scss";

type IconProps = {
  IconType: ComponentType<{ size: number; color?: string; className?: string }>;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: FC<IconProps> = ({ IconType, size = 20, color, className }) => {
  const { theme } = useTheme();

  return (
    <IconType
      size={size}
      color={color}
      className={`${styles["icon"]} ${className || ""} ${
        theme === "dark" ? styles["dark"] : styles["light"]
      }`}
    />
  );
};

export { Icon };
