import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Image from "next/image";
import Button from "../button";

const Partner = () => {
  return (
    <div className={styles.partnerContainer}>
      <Layout>
        <div className={styles.partnerWrapper}>
          <div className={styles.partnerText}>
            <div className={styles.partnerHeader}>
              <h3>WE BUILD TOGETHER</h3>
              <h2>Partner with us today & experience the difference!</h2>
            </div>
            <div className={styles.partnerHeader}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
            </div>
            <div className={styles.startUp}>
              <div>
                <h2>300+</h2>
                <p>Successful Startups Strong!</p>
              </div>
              <div>
                <h2>100+</h2>
                <p>Successful Partners & Growing!</p>
              </div>
            </div>
            <div className={styles.partnerButton}>
              <Button buttonText="Explore Opportunities" active={true} type="Primary" />
              <Button buttonText="Meet our team" active={true} type="Primarys" />
            </div>
          </div>
          <Image src="./images/partner.png" width={624} height={654} alt="Partners" />
        </div>
      </Layout>
    </div>
  );
};

export default Partner;
