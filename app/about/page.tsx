import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Story from "@/components/story";
import WhatsNext from "@/components/whats-next";
import { aboutUs } from "@/utils/data";
import React from "react";

const About = () => {
  return (
    <>
      <Hero text="Innovation in Every Chapter" title="Embrace the Essence of Adomi Capital and What Drives Us" bg="./images/about.png" />
      <Story array={aboutUs} type={true} />
      <WhatsNext title="Areas of Interest" link="/areas" type={false} />
      <Footer />
    </>
  );
};

export default About;
