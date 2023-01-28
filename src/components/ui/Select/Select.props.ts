export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  color?: "primary" | "secondary" | "dark";
  variant?: "contained" | "outlined" | "text";
  options: SelectOption[];
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
