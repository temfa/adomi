"use client";
import React from "react";
import styles from "./styles.module.css";
import { useAppSelector } from "@/reduxtoolkit/store/store";

const BodyLayout = ({ children }: { children: any }) => {
  const mobile = useAppSelector((store) => store.mobile);
  return <div className={mobile ? styles.bodyLayout : styles.bodyLayout2}>{children}</div>;
};

export default BodyLayout;
