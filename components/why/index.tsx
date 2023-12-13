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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
            </div>
            <div className={styles.whyButton}>
              <Button buttonText="Why Adomi Capital is different" active={true} type="Secondary" />
            </div>
          </div>
          <Image src="./images/why.png" width={602} height={640} alt="why" />
        </div>
      </Layout>
    </div>
  );
};

export default Why;
