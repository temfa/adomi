"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/components/input";
import PhoneNumber from "@/components/phone";
import ApplyLayout from "@/utils/apply-layout";

const Step1 = ({ action }: { action: any }) => {
  const [active, setActive] = useState(false);
  return (
    <ApplyLayout buttonText="Next" active={active} action={action}>
      <div className={styles.steponeDouble}>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
      </div>
      <Input type="email" placeholder="Email Address" />
      <PhoneNumber
        type={false}
        action={(e: any) => {
          if (e.target.value.length > 0) {
            setActive(true);
          } else setActive(false);
        }}
        placeholder="Phone Number"
      />
    </ApplyLayout>
  );
};

export default Step1;
