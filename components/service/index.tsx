import React from "react";
import styles from "./styles.module.css";
import { services } from "@/utils/data";
import Layout from "@/utils/layout";

const Service = () => {
  return services?.map((item, index) => {
    return (
      <div className={styles.serviceContainer} key={index}>
        {/* <div className={styles.serviceHeader}>
          <h2>{item.title}</h2>
        </div> */}
        <Layout>
          <div className={styles.serviceBody}>
            {item.subTitles?.map((items, index2) => {
              return (
                <div className={styles.serviceSingle} key={index2}>
                  <h2>{items.texts}</h2>
                  <div>
                    {items.subTexts?.map((el, index3) => {
                      return <p key={index3}>{el}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      </div>
    );
  });
};

export default Service;
