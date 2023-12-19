"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Envelope from "@/svgs/envelope";
import Link from "next/link";
import Phone from "@/svgs/phone";
import Linkedin from "@/svgs/linkedin";
import Instagram from "@/svgs/instagram";
import Facebook from "@/svgs/facebook";
import Twitter from "@/svgs/twitter";
import Button from "../button";
import Input from "../input";
import PhoneNumber from "../phone";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);
  return (
    <div className={styles.contactBody}>
      <Layout>
        <div className={styles.contactWrapper}>
          <div className={styles.contactSocials}>
            <div className={styles.contactSocialsBody}>
              <h2>Chat to us</h2>
              <div className={styles.contactSocialWrap}>
                <p>Our friendly team is here to help</p>
                <Link href="mailto:hello@adomicapitalvc.com">
                  <span>
                    <Envelope />
                  </span>
                  hello@adomicapitalvc.com
                </Link>
              </div>
            </div>
            <div className={styles.contactSocialsBody}>
              <h2>Call us</h2>
              <div className={styles.contactSocialWrap}>
                <p>Mon - Fri from 8am to 5pm</p>
                <Link href="">
                  <span>
                    <Phone />
                  </span>
                  +91 845 789 123
                </Link>
              </div>
            </div>
            <div className={styles.contactSocialsBody}>
              <h2>Social media</h2>
              <div className={styles.contactSocialCont}>
                <Linkedin />
                <Instagram />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
          <form>
            <div className={styles.contactForm}>
              <div className={styles.contactFormBody}>
                <div className={styles.contactFormDouble}>
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <PhoneNumber type={false} placeholder="Phone Number" />
                <Input
                  type="textarea"
                  placeholder="Message"
                  action={(e: any) => {
                    if (e.target.value.length > 0) setActive(true);
                    else setActive(false);
                  }}
                />
              </div>
              <div className={styles.contactButton}>
                <Button type="Primary" buttonText="Submit" active={active} />
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ContactForm;
