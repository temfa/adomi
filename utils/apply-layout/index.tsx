import React from "react";
import styles from "./styles.module.css";
import Button from "@/components/button";

const ApplyLayout = ({ children, action, buttonText, active }: { children: any; action: any; buttonText: string; active: boolean }) => {
  return (
    <div className={styles.applyLayout}>
      <div className={styles.applyWrapper}>{children}</div>
      <div className={styles.applyButton} onClick={action}>
        <Button buttonText={buttonText} active={active} type="Primary" />
      </div>
    </div>
  );
};

export default ApplyLayout;
