export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: {
    label: string;
    url: string;
  };
}
