import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NextStep from "@/components/next-step";
import ServicesIntro from "@/components/services-intro";
import Story from "@/components/story";
import { partners } from "@/utils/data";
import React from "react";

const Partners = () => {
  return (
    <>
      <Hero bg="./images/partners.png" text="Innovate Together" title="Apply to Partner With Us" />
      <ServicesIntro
        text1="We believe in empowering innovative startups to reach new heights. Our application process is designed to be straightforward, transparent, and geared towards identifying ventures with the potential for extraordinary growth."
        text2="Here is a step-by-step guide to help you navigate the application process:"
      />
      <Story array={partners} type={true} />
      <NextStep
        text1="READY TO EXPLORE OPPORTUNITIES?"
        text2="The Future Of Strategic Investments Awaits."
        text3="Connect with us today, and embark on a transformative investment journey."
      />
      <Footer />
    </>
  );
};

export default Partners;
