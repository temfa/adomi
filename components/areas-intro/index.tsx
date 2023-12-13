import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Image from "next/image";
import { areasData } from "@/utils/data";

const AreasIntro = () => {
  return (
    <div className={styles.areasIntro}>
      <Layout>
        <div className={styles.areasText}>
          <h2>Introduction</h2>
          <p>
            As a forward-thinking venture capital firm, we specialise in strategic investments across diverse sectors, aiming to foster innovation and drive sustainable growth.{" "}
          </p>
          <p>
            At Adomi Capital & Advisory, innovation meets investment, and groundbreaking ideas come to life. Our commitment to fostering transformative ventures is reflected in our
            carefully curated areas of investment. Each sector we explore is a realm of untapped potential, an arena where visionaries and pioneers converge to shape the future.
          </p>
          <p>Explore our areas of investment below and discover how we can partner with you to transform ideas into thriving ventures.</p>
        </div>
      </Layout>
      <div className={styles.areasBody}>
        {areasData?.map((item, index) => {
          return (
            <div className={styles.areasCont} key={index}>
              <div className={styles.areasImg}>
                <Image src={item.img} alt="area" fill />
              </div>
              <Layout>
                <div className={styles.areaBodyText}>
                  <div>
                    <p>{item.text}</p>
                    <h2>{item.title}</h2>
                  </div>
                  {item.subTexts?.map((items, index2) => {
                    return <p key={index2}>{items}</p>;
                  })}
                </div>
              </Layout>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreasIntro;
