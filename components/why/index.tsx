import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Image from "next/image";
import Button from "../button";

const Why = () => {
  return (
    <div className={styles.whyContainer}>
      <Layout>
        <div className={styles.whyWrapper}>
          <div className={styles.whyText}>
            <div className={styles.whyHeader}>
              <h3>WHY CHOOSE US</h3>
              <h2>Designed for your need in mind</h2>
            </div>
            <div className={styles.whyHeader}>
              <p>
                Our primary focus is on delivering value to our customers, who are mostly thriving SMEs. Our solutions are tailored to channel capital and innovation towards the
                crucial aspects of your business.
              </p>
            </div>
            <div className={styles.whyButton}>
              <Button buttonText="Why Adomi Capital is different" active={true} type="Secondary" />
            </div>
          </div>
          <div className={styles.whyImage}>
            <Image src="./images/why.png" alt="why" width={602} height={640} />
            <Image src="./images/why-mobile.png" alt="why" width={398} height={426} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Why;
