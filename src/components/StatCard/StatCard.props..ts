export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  value: string | React.ReactNode;
  label: string;
  image?: string;
}
