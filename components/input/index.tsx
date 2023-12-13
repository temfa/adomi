import React from "react";
import styles from "./styles.module.css";

const Input = ({ type, placeholder, action }: { type: string; placeholder: string; action?: any }) => {
  return type === "textarea" ? (
    <div className={styles.inputContainer}>
      <textarea placeholder=" " onChange={action} />
      <span>{placeholder}</span>
    </div>
  ) : (
    <div className={styles.inputContainer}>
      <input type={type} placeholder=" " onChange={action} />
      <span>{placeholder}</span>
    </div>
  );
};

export default Input;
