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
          text1="Our service offerings have been carefully selected to provide SMEs with innovative financial solutions, tailored to their specific needs. In line with this, our Venture Capital interests are focused on industries that will fuel Africa's growth and decrease its reliance on export of raw materials. Additionally, our financial solutions cater specifically to SMEs and are designed to alleviate any funding obstacles commonly faced by small businesses. Our mission is to support SMEs in delivering on their promises to their customers while also implementing cutting-edge technologies to enhance their financial activities "
          text2=""
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
