import type { ButtonProps } from "./button.props";
import cn from "classnames";
import styles from "./button.module.css";

export const Button = ({
  children,
  className,
  color = "primary",
  size = "large",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(className, styles.button, styles[color], styles[size])}
      {...props}
    >
      {children}
    </button>
  );
};
