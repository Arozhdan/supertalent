import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Button, MyLink } from "../ui";
import { Transition } from "@headlessui/react";
import { useEffect, useMemo, useState } from "react";
import { useDebounced } from "@/hooks/useDebounced";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = useMemo(
    () => () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) return setShow(true);
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    },
    [lastScrollY]
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, lastScrollY]);

  const debouncedShow = useDebounced(show, 50);

  return (
    <Transition
      show={debouncedShow}
      enter="transition-all linear duration-[600ms]"
      enterFrom="fixed -top-28 w-full z-50 duration-[600ms]"
      enterTo="fixed top-0 w-full z-50 duration-[600ms]"
      leave="transition-all linear duration-[400ms]"
      leaveFrom="fixed top-0 w-full z-50 duration-[400ms]"
      leaveTo="fixed -top-28 w-full z-50 duration-[400ms]"
    >
      <nav className={styles.navWrapper}>
        <div className={styles.nav}>
          <Link href="/">
            <Image src="/logo.svg" alt="Supertalent" width={94} height={40} />
          </Link>
          <div className={styles.middle}>
            <MyLink appearance="link" href="#about">
              Why Supertalent
            </MyLink>
            <MyLink appearance="link" href="#about">
              Team Assessments
            </MyLink>
            <MyLink appearance="link" href="#about">
              Pricing
            </MyLink>
            <MyLink appearance="link" href="#about">
              Testimonials
            </MyLink>
          </div>
          <MyLink href="/profile">Go to profile</MyLink>
        </div>
      </nav>
    </Transition>
  );
};
