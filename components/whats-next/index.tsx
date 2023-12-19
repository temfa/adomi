"use client";
import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Right from "@/svgs/right";
import { useRouter } from "next/navigation";

const WhatsNext = ({ title, link, type }: { title: string; link: string; type: boolean }) => {
  const router = useRouter();
  return (
    <div className={styles.whatsNext}>
      <Layout>
        <div className={styles.whatsWrapper}>
          {type ? <p>READY TO </p> : <p>SEE WHAT’S NEXT</p>}
          <div>
            <h2>{title}</h2>
            <Right
              action={() => {
                router.push(link);
              }}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default WhatsNext;
