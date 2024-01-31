"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import CardLayout from "@/utils/card-layout";
import Add from "@/svgs/add";
import Image from "next/image";

const Areas = () => {
  const [state, setState] = useState(window.innerWidth < 700 ? false : true);
  return (
    <div className={styles.areasContainer}>
      <Layout>
        <CardLayout
          title="Our areas of interest."
          text1="Our service offerings have been carefully selected to provide SMEs with innovative financial solutions, tailored to their specific needs. In line with this, our Venture Capital interests are focused on industries that will fuel Africa's growth and decrease its reliance on export of raw materials."
          text2="Additionally, our financial solutions cater specifically to SMEs and are designed to alleviate any funding obstacles commonly faced by small businesses."
          text3="Our service offerings have been carefully Our mission is to support SMEs in delivering on their promises to their customers while also implementing cutting-edge technologies to enhance their financial activities."
          buttonText="learn more">
          <div className={styles.areaWrapper}>
            <div className={styles.areaBody}>
              <div className={styles.areaDouble}>
                <Image src="/images/area6.png" width={340} height={260} alt="Areas" />
                <Image src="/images/area7.png" width={340} height={260} alt="Areas" />
              </div>
              <div className={styles.areaDouble}>
                <Image src="/images/area8.png" width={340} height={260} alt="Areas" />
                {state ? <Image src="/images/area9.png" width={340} height={260} alt="Areas" /> : null}
              </div>
              {state ? <Image src="/images/area10.png" width={733} height={261} alt="Areas" /> : null}
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
