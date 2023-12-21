import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Image from "next/image";

const Story = ({ array, type }: { array: any; type: boolean }) => {
  return array?.map((item: any, index: any) => {
    return (
      <div
        className={type ? ((index + 1) % 2 === 1 ? styles.storyContainers : styles.storyContainer) : (index + 1) % 2 === 0 ? styles.storyContainers : styles.storyContainer}
        key={index}>
        <Layout>
          <div className={styles.storyWrapper}>
            <div className={styles.storyText}>
              <div className={styles.storyHeader}>
                <p>{item.text}</p>
                <h2>{item.title}</h2>
              </div>
              <div className={styles.storyBody}>
                {item.subtexts?.map((items: any, index2: any) => {
                  return <p key={index2}>{items}</p>;
                })}
              </div>
              {item.req ? (
                <div className={styles.req}>
                  {item.req?.map((req: any, index3: any) => {
                    return <p key={index3}>{req}</p>;
                  })}
                </div>
              ) : null}
            </div>
            <div className={styles.storyImg}>
              <Image src={item.img} width={602} height={640} alt="about" />
              <Image src="./images/why-mobile.png" alt="about" width={398} height={426} />
            </div>
          </div>
        </Layout>
      </div>
    );
  });
};

export default Story;
