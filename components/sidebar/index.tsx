import React from "react";
import styles from "./styles.module.css";
import SidebarStyled from "@/utils/styles/sidebar";
import Logo from "@/svgs/logo";
import Close from "@/svgs/close";
import { footerLinks, navbar } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../button";
import { useDispatch } from "react-redux";
import { clearMobile } from "@/reduxtoolkit/slice/mobile";
import Linkedin from "@/svgs/linkedin";
import Twitter from "@/svgs/twitter";
import Facebook from "@/svgs/facebook";
import Instagram from "@/svgs/instagram";

const Sidebar = ({ right, action }: { right: string; action: any }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const close = () => dispatch(clearMobile());
  return (
    <SidebarStyled right={right}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarHeader}>
          <div>
            <Logo />
            <p>Adomi Capital & Advisory </p>
          </div>
          <Close action={action} />
        </div>
        <div className={styles.headerNav}>
          <div className={styles.headerLinks}>
            {navbar?.map((items, index) => {
              return (
                <Link
                  href={items.link}
                  key={index}
                  onClick={() => {
                    close();
                  }}>
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
                    close();
                  }}>
                  <Button type="Primary" buttonText="for Startups" active={true} />
                </div>
                <div
                  className={styles.headerExplore}
                  onClick={() => {
                    router.push("/partners");
                    close();
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
                    close();
                  }}>
                  <Button type="Secondary" buttonText="Contact Us" active={true} />
                </div>
                {pathname === "/partners" ? (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/apply/partners");
                      close();
                    }}>
                    <Button type="Primary" buttonText="Apply now" active={true} />
                  </div>
                ) : pathname === "/startup" ? (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/apply/startup");
                      close();
                    }}>
                    <Button type="Primary" buttonText="Apply now" active={true} />
                  </div>
                ) : (
                  <div
                    className={styles.headerExplore}
                    onClick={() => {
                      router.push("/get-started");
                      close();
                    }}>
                    <Button type="Primary" buttonText="Explore Opportunities" active={true} />
                  </div>
                )}
              </>
            )}
          </div>
          <div className={styles.headerFooter}>
            <div className={styles.footerHeader}>
              <div>
                <h3>Company</h3>
                {footerLinks.company?.map((items, index) => {
                  return (
                    <Link
                      href={items.link}
                      key={index}
                      onClick={() => {
                        close();
                      }}>
                      {items.title}
                    </Link>
                  );
                })}
              </div>
              <div>
                <h3>Quick Links</h3>
                {footerLinks.quick?.map((items, index) => {
                  return (
                    <Link
                      href={items.link}
                      key={index}
                      onClick={() => {
                        close();
                      }}>
                      {items.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.footerBody}>
              <div className={styles.follow}>
                <p>Follow us</p>
                <Linkedin />
                <Twitter />
                <Facebook />
                <Instagram />
              </div>
              <p>© 2023 Adomi Capital & Advisory Nigeria Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
