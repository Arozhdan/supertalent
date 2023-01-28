import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./Callout.module.css";
import type { CalloutProps } from "./Callout.props";
import { Typography } from "../ui/Typography/Typography";
import { MyLink } from "../ui";

export const Callout = ({ className, title, link }: CalloutProps) => {
  return (
    <div className={cn(styles.callout, className)}>
      <Image
        width={104}
        height={102}
        src="https://cdn.supertalent.io/static/media/illustration-create-profile-missing-9b676a04c8c1f08f-1209.png"
        alt="Callout picture"
      />
      <div>
        <Typography tag="heading" variant="h4" className="text-dark">
          {title}
        </Typography>
      </div>
      <MyLink href={link.url} color="dark">
        {link.label}
      </MyLink>
    </div>
  );
};
