export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  color?: "primary" | "secondary" | "dark";
  appearance?: "link" | "link-colored" | "button" | "underlined";
}
