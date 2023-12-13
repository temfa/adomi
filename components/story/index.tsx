import React from "react";
import styles from "./styles.module.css";
import { aboutUs } from "@/utils/data";
import Layout from "@/utils/layout";
import Image from "next/image";

const Story = () => {
  return aboutUs?.map((item, index) => {
    return (
      <div className={(index + 1) % 2 === 0 ? styles.storyContainers : styles.storyContainer} key={index}>
        <Layout>
          <div className={styles.storyWrapper}>
            <div className={styles.storyText}>
              <div className={styles.storyHeader}>
                <p>{item.text}</p>
                <h2>{item.title}</h2>
              </div>
              <div className={styles.storyBody}>
                {item.subtexts?.map((items, index2) => {
                  return <p key={index2}>{items}</p>;
                })}
              </div>
            </div>
            <Image src={item.img} width={602} height={640} alt="about" />
          </div>
        </Layout>
      </div>
    );
  });
};

export default Story;
