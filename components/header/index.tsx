import React from "react";
import styles from "./styles.module.css";
import Logo from "@/svgs/logo";
import { navbar } from "@/utils/data";
import Link from "next/link";
import Button from "../button";
import { useRouter } from "next/navigation";

const Header = () => {
  // const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <div>
            <Logo />
            <p>Adomi Capital & Advisory </p>
          </div>
        </div>
        <div className={styles.headerNav}>
          <div className={styles.headerLinks}>
            {navbar?.map((items, index) => {
              return (
                <Link href={items.link} key={index}>
                  {items.title}
                </Link>
              );
            })}
          </div>
          <div className={styles.headerActions}>
            <div
              className={styles.headerContact}
              onClick={() => {
                router.push("/contact");
              }}>
              <Button type="Secondary" buttonText="Contact Us" active={true} />
            </div>
            <div className={styles.headerExplore}>
              <Button type="Primary" buttonText="Get Started" active={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
