import React from "react";
import styles from "./styles.module.css";
import Layout from "../layout";
import Back from "@/svgs/back";

const FormLayout = ({ titles, step, children, back }: { titles: string[]; step: number; children: React.ReactNode; back: any }) => {
  return (
    <div className={styles.formContainer}>
      <Layout>
        <div className={styles.formCont}>
          {step === 0 ? null : (
            <div className={styles.formBack} onClick={back}>
              <Back /> <p>Go Back</p>
            </div>
          )}
          <div className={styles.formWrapper}>
            <div className={styles.formFirst}>
              {titles?.map((item, index) => {
                if (index <= step) {
                  return (
                    <h2 className={styles.active} key={index}>
                      {item}
                    </h2>
                  );
                } else {
                  return <h2 key={index}>{item}</h2>;
                }
                //   return <h2>{item}</h2>;
              })}
            </div>
            <div className={styles.formSecond}>{children}</div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FormLayout;
