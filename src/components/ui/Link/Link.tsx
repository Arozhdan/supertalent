import type { LinkProps } from "./link.props";
import cn from "classnames";
import styles from "./link.module.css";
import Link from "next/link";

export const MyLink = (props: LinkProps) => {
  if (!props.href) return <></>;
  const isExternal =
    props.href.startsWith("http") ||
    props.href.startsWith("mailto") ||
    props.href.startsWith("tel") ||
    props.href.startsWith("#");
  if (isExternal) return <HtmlLink {...props}>{props.children}</HtmlLink>;
  return <NextLink {...props}>{props.children}</NextLink>;
};

const HtmlLink = ({
  children,
  className,
  href,
  color = "primary",
  appearance = "button",
  ...props
}: LinkProps) => {
  return (
    <a
      href={href}
      className={cn(className, styles.link, styles[color], styles[appearance])}
      {...props}
    >
      {children}
    </a>
  );
};

const NextLink = ({
  children,
  className,
  href,
  color = "primary",
  appearance = "button",
  ...props
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(className, styles.link, styles[color], styles[appearance])}
      {...props}
    >
      {children}
    </Link>
  );
};
