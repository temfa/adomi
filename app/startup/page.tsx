"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NextStep from "@/components/next-step";
import ServicesIntro from "@/components/services-intro";
import Story from "@/components/story";
import { startup } from "@/utils/data";
import React from "react";

const Startup = () => {
  return (
    <>
      <Hero bg="./images/startup.png" text="Transform Ideas into Reality" title="Apply to Join Us" />
      <ServicesIntro
        text1="We believe in empowering innovative startups to reach new heights. Our application process is designed to be straightforward, transparent, and geared towards identifying ventures with the potential for extraordinary growth."
        text2="Here is a step-by-step guide to help you navigate the application process:"
      />
      <Story array={startup} type={true} />
      <NextStep text1="NEXT STEPS" text2="Ready To Take The Next Step? " text3="Begin your journey with us by filling our application. Click here to start application." />
      <Footer />
    </>
  );
};

export default Startup;
