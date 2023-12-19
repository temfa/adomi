import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PortfolioBody from "@/components/portfolio-body";
import WhatsNext from "@/components/whats-next";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <Hero title="Our Portfolio of Transformative Ventures" text="From Vision to Victory" bg="./images/portfolio-bg.png" />
      <PortfolioBody />
      <WhatsNext title="Meet the Team" link="/team" type={false} />
      <Footer />
    </>
  );
};

export default Portfolio;
