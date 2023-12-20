"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import CardLayout from "@/utils/card-layout";
import BioTech from "@/svgs/biotech";
import Add from "@/svgs/add";

const Areas = () => {
  const [state, setState] = useState(window.innerWidth < 700 ? false : true);
  return (
    <div className={styles.areasContainer}>
      <Layout>
        <CardLayout
          title="Our areas of interest."
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
          text2="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu"
          buttonText="learn more">
          <div className={styles.areaWrapper}>
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
                {state ? (
                  <div className={styles.areaSingle}>
                    <div>
                      <BioTech />
                    </div>
                    <p>Biotechnology</p>
                  </div>
                ) : null}
              </div>
              {state ? (
                <div className={styles.areaSingle}>
                  <div>
                    <BioTech />
                  </div>
                  <p>Clean Energy</p>
                </div>
              ) : null}
            </div>
            <div className={styles.areaMore} onClick={() => setState(!state)}>
              {state ? <p>Show Less</p> : <p>Show More</p>}
              <Add />
            </div>
          </div>
        </CardLayout>
      </Layout>
    </div>
  );
};

export default Areas;
