import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Process from "@/components/process";
import ServicesIntro from "@/components/services-intro";
import React from "react";
import styles from "./styles.module.css";
import Story from "@/components/story";
import { getStarted } from "@/utils/data";

const GetStarted = () => {
  return (
    <>
      <Hero bg="./images/get-started.png" page="get started" text="Infinite Horizon" title="Explore Diverse Opportunities Tailored For You" />
      <ServicesIntro
        text1="At Adomi Capital & Advisory, investment opportunities transcend boundaries. Our focus is on catalysing innovation and fostering growth in Ghana and Nigeria. "
        text2="Explore the diverse ventures that await your strategic investment and be a part of the success stories shaping these thriving economies."
      />
      <div className={styles.serviceHeader}>
        <h2>WHY INVEST WITH US?</h2>
      </div>
      <Story array={getStarted} type={true} />
      <Process />
      <Footer />
    </>
  );
};

export default GetStarted;
