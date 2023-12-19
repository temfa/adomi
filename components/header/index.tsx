import React from "react";
import styles from "./styles.module.css";
import Logo from "@/svgs/logo";
import { navbar } from "@/utils/data";
import Link from "next/link";
import Button from "../button";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
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
            {pathname === "/get-started" ? (
              <>
                <div
                  className={styles.headerContact}
                  onClick={() => {
                    router.push("/startup");
                  }}>
                  <Button type="Primary" buttonText="for Startups" active={true} />
                </div>
                <div
                  className={styles.headerExplore}
                  onClick={() => {
                    router.push("/partners");
                  }}>
                  <Button type="Primary" buttonText="for Partnership" active={true} />
                </div>
              </>
            ) : (
              <>
                <div
                  className={styles.headerContact}
                  onClick={() => {
                    router.push("/contact");
                  }}>
                  <Button type="Secondary" buttonText="Contact Us" active={true} />
                </div>
                {pathname === "/partners" ? (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/apply/partners");
                    }}>
                    <Button type="Primary" buttonText="Apply now" active={true} />
                  </div>
                ) : pathname === "/startup" ? (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/apply/startup");
                    }}>
                    <Button type="Primary" buttonText="Apply now" active={true} />
                  </div>
                ) : (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/get-started");
                    }}>
                    <Button type="Primary" buttonText="Explore Opportunities" active={true} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
