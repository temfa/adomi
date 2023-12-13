import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, buttonText, active }: { type: string; buttonText: string; active: boolean }) => {
  return active ? (
    type === "Primary" ? (
      <button className={styles.primaryButton}>{buttonText}</button>
    ) : (
      <button className={styles.secondaryButton}>{buttonText}</button>
    )
  ) : (
    <button disabled className={styles.disabledButton}>
      {buttonText}
    </button>
  );
};

export default Button;
