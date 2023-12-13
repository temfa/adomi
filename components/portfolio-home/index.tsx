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
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
          text2="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu"
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
