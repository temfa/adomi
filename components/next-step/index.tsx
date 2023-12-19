import React from "react";
import styles from "./styles.module.css";
import Button from "../button";

const NextStep = ({ text1, text2, text3 }: { text1: string; text2: string; text3: string }) => {
  return (
    <div className={styles.nextStep}>
      <div className={styles.nextFirst}>
        <p>{text1}</p>
        <h2>{text2}</h2>
      </div>
      <div className={styles.nextSecond}>
        <p>{text3}</p>
        <div>
          <Button type="Primary" buttonText="Apply now" active={true} />
        </div>
      </div>
    </div>
  );
};

export default NextStep;
