import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={`${styles["input"]} ${className || ""} `}
      {...props}
    />
  );
};

export { Input };
