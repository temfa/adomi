import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";

const ServicesIntro = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className={styles.servicesIntro}>
      <Layout>
        <div className={styles.servicesWrapper}>
          <h2>{text1}</h2>
          <h2>{text2}</h2>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesIntro;
