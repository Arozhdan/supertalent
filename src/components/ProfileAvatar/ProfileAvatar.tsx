import Image from "next/image";
import cn from "classnames";
import styles from "./ProfileAvatar.module.css";
import type { ProfileAvatarProps } from "./ProfileAvatar.props";
export const ProfileAvatar = ({
  className,
  role,
  name,
  image = "https://cdn.supertalent.io/static/media/user.3d7f41d906322de18f800eda2faba090.svg",
  ...props
}: ProfileAvatarProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={image} alt={name} width={96} height={96} />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
};
