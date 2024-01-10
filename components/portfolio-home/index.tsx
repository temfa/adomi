"use client";
import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import CardLayout from "@/utils/card-layout";
import Slider from "react-slick";
import { setting } from "@/utils/data";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioHome = () => {
  return (
    <div className={styles.portfolioHome}>
      <Layout>
        <CardLayout
          title="Our Portfolio Companies"
          text1="The success of our portfolio holdings has translated into significant returns for our investors and has had a positive impact on job creation in Nigeria and Ghana. Our initial investments were strategically made in the hospitality, real estate, and technology sectors."
          text2=""
          buttonText="Explore Portfolio">
          <div>
            <Slider {...setting}>
              <div>
                <Image src="./images/portfolio1.png" height={540} width={624} alt="Portfolio" />
                <div className={styles.indicator}></div>
              </div>
              <div>
                <Image src="./images/portfolio2.png" height={540} width={624} alt="Portfolio" priority />
                <div className={styles.indicator}></div>
              </div>
              <div>
                <Image src="./images/portfolio3.png" height={540} width={624} alt="Portfolio" />
                <div className={styles.indicator}></div>
              </div>
            </Slider>
          </div>
        </CardLayout>
      </Layout>
    </div>
  );
};

export default PortfolioHome;
