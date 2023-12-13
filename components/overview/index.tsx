import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";

const Overview = ({ array }: { array: string[] }) => {
  return (
    <Layout>
      <div className={styles.overviewCont}>
        <h2>Overview</h2>
        {array?.map((items, index) => {
          return <p key={index}>{items}</p>;
        })}
      </div>
    </Layout>
  );
};

export default Overview;
