import type { TypographyProps } from "./typography.props";
import cn from "classnames";
import styles from "./typography.module.css";

export const Typography = (props: TypographyProps) => {
  if (props.tag === "heading") return <Htag {...props} />;
  if (props.tag === "paragraph") return <Ptag {...props} />;
  return <Span {...props} />;
};

const Htag = ({
  children,
  className,
  tag = "heading",
  variant = "h3",
  ...props
}: TypographyProps) => {
  const classes = cn(styles[tag], styles[variant], className);

  switch (variant) {
    case "h1":
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
    default:
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );
  }
};

const Ptag = ({
  children,
  className,
  tag = "paragraph",
  styling = "body",
}: TypographyProps) => {
  const classes = cn(
    className,
    styles.Typography,
    styles[tag],
    styles[styling]
  );
  return <p className={classes}>{children}</p>;
};

const Span = ({
  children,
  className,
  tag = "span",
  styling = "body",
}: TypographyProps) => {
  const classes = cn(
    className,
    styles.Typography,
    styles[tag],
    styles[styling]
  );
  return <span className={classes}>{children}</span>;
};
