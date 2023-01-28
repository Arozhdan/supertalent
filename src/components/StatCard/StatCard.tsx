import cn from "classnames";
import Image from "next/image";
import type { StatCardProps } from "./StatCard.props.";
import styles from "./StatCard.module.css";

export const StatCard = ({
  className,
  icon,
  value,
  label,
  image,
  ...props
}: StatCardProps) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div>
          <div className={styles.value}>{value}</div>
          <div className={styles.label}>{label}</div>
        </div>
      </div>
      {image && (
        <div className={styles.image}>
          <Image src={image} alt={label} width={236} height={204} />
        </div>
      )}
    </div>
  );
};
