import React from "react";
import cn from "classnames";
import styles from "./Paper.module.css";
import type { PaperProps } from "./Paper.props";

export const Paper = ({
  className,
  children,
  elevation = "default",
  variant = "white",
}: PaperProps) => {
  return (
    <div
      className={cn(
        styles.Paper,
        className,
        styles[elevation],
        styles[variant]
      )}
    >
      {children}
      {variant === "glass" && (
        <>
          <div className={cn(styles.blurTopLeft)} />
          <div className={cn(styles.blurTopRight)} />
          <div className={cn(styles.blurBottomLeft)} />
          <div className={cn(styles.blurBottomRight)} />
        </>
      )}
    </div>
  );
};
