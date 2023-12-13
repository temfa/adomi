import React from "react";
import styles from "./styles.module.css";
import Flag from "@/svgs/flag";
import CaretDown from "@/svgs/caretDown";

const PhoneNumber = () => {
  return (
    <div className={styles.phoneNumber}>
      <div>
        <Flag />
        <CaretDown />
      </div>
      <p>+234</p>
      <input type="tel" placeholder="Phone Number" />
    </div>
  );
};

export default PhoneNumber;
