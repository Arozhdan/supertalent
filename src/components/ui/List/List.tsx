import cn from "classnames";
import { CheckIcon } from "@heroicons/react/20/solid";
import styles from "./list.module.css";
import type { ListItemProps, ListProps } from "./list.props";

export const List = ({ children, className, ...props }: ListProps) => {
  return (
    <ul className={cn(className, styles.list)} {...props}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, className, ...props }: ListItemProps) => {
  return (
    <li className={cn(className, styles.listItem)} {...props}>
      <CheckIcon className={styles.icon} />
      <div>{children}</div>
    </li>
  );
};
