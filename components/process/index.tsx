import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import SingleProcess from "../single-process";

const Process = () => {
  return (
    <div className={styles.processContainer}>
      <Layout>
        <div className={styles.processWrapper}>
          <div className={styles.processHeader}>
            <h2>Application Process</h2>
            <h2>Our streamlined application process is your gateway to a world of opportunities.</h2>
          </div>
          <div className={styles.processBody}>
            <SingleProcess
              title="Startups"
              text="Join the ranks of successful startups that have flourished with our strategic investments. We look forward to discovering the potential within your venture and building a prosperous future together."
            />
            <SingleProcess
              title="Partnership"
              text="The future of strategic investments awaits. Connect with us today, explore opportunities that transcend borders and embark on a transformative investment journey."
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Process;
