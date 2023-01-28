export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: "heading" | "paragraph" | "span";
  variant?: "h1" | "h2" | "h3" | "h4";
  styling?: "body" | "caption";
}
