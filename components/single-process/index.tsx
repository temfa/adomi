import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "../button";

const SingleProcess = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={title === "Startups" ? styles.singleProcess : styles.singleProcess2}>
      <Image src="./images/about1.png" width={470} height={465} alt="Single Process" />
      <div className={styles.singleText}>
        <div className={styles.processText}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.processButton}>
          <Button buttonText="Learn more" type="Primary" active={true} />
        </div>
      </div>
    </div>
  );
};

export default SingleProcess;
