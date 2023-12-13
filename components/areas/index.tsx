import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import CardLayout from "@/utils/card-layout";
import BioTech from "@/svgs/biotech";

const Areas = () => {
  return (
    <div className={styles.areasContainer}>
      <Layout>
        <CardLayout
          title="Our areas of interest."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
          text2="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu"
          buttonText="learn more">
          <div className={styles.areaBody}>
            <div className={styles.areaDouble}>
              <div className={styles.areaSingle}>
                <div>
                  <BioTech />
                </div>
                <p>Software</p>
              </div>
              <div className={styles.areaSingle}>
                <div>
                  <BioTech />
                </div>
                <p>Financial Technology</p>
              </div>
            </div>
            <div className={styles.areaDouble}>
              <div className={styles.areaSingle}>
                <div>
                  <BioTech />
                </div>
                <p>Agritechnology</p>
              </div>
              <div className={styles.areaSingle}>
                <div>
                  <BioTech />
                </div>
                <p>Biotechnology</p>
              </div>
            </div>
            <div className={styles.areaSingle}>
              <div>
                <BioTech />
              </div>
              <p>Agritechnology</p>
            </div>
          </div>
        </CardLayout>
      </Layout>
    </div>
  );
};

export default Areas;
