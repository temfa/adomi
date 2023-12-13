import AreasIntro from "@/components/areas-intro";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import WhatsNext from "@/components/whats-next";
import React from "react";

const Areas = () => {
  return (
    <>
      <Hero title="Ventures That Define Excellence" text="Forging the Future" bg="./images/areas.png" />
      <AreasIntro />
      <WhatsNext title="Services" link="/link" />
      <Footer />
    </>
  );
};

export default Areas;
