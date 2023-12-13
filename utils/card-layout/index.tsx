import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/button";

const CardLayout = ({ title, text1, text2, buttonText, children }: { title: string; text1: string; text2: string; buttonText: string; children: React.ReactNode }) => {
  return (
    <div className={styles.cardLayout}>
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <div>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <Button active={true} buttonText={buttonText} type="Secondary" />
      </div>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default CardLayout;
