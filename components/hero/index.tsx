"use client";
import React from "react";
import styles from "./styles.module.css";
import Header from "../header";
import Slider from "react-slick";
import Button from "../button";
import Layout from "@/utils/layout";
import { heroSlider, settings } from "@/utils/data";
import Image from "next/image";
import HeroStyled from "@/utils/styles/hero";

const Hero = ({ page, title, text, bg }: { page?: string; title?: string; text?: string; bg: string }) => {
  return (
    <HeroStyled bg={bg} page={page}>
      <Header />
      <div className={styles.heroWrapper}>
        <Layout>
          {page === "home" ? (
            <>
              <div className={styles.heroTest}>
                <div className={styles.heroText}>
                  <h2>
                    Empowering <span>Innovation, </span>
                    Fueling Growth
                  </h2>
                  <div>
                    <Button type="Primary" buttonText="explore opportunities" active={true} />
                  </div>
                </div>
                <div className={styles.heroShapes}>
                  <Slider {...settings}>
                    {heroSlider?.map((items, index) => {
                      return (
                        <div className={styles.sliderImage} key={index}>
                          <Image width={(index + 1) % 0 ? 405 : 296} height={261} alt="hero-slide" src={items} />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </>
          ) : page === "contact" ? (
            <div className={styles.heroTexts2}>
              <h2>{title}</h2>
              <h2>{text}</h2>
            </div>
          ) : (
            <div className={styles.heroTexts}>
              <h2>{text}</h2>
              <h2>{title}</h2>
              {page === "get started" ? (
                <div>
                  <Button buttonText="for Startups" type="Primary" active={true} />
                  <Button buttonText="for Partnership" type="Primary" active={true} />
                </div>
              ) : null}
            </div>
          )}
        </Layout>
      </div>
    </HeroStyled>
  );
};

export default Hero;
