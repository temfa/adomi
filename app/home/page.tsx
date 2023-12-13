import Areas from "@/components/areas";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Partner from "@/components/partner";
import PortfolioHome from "@/components/portfolio-home";
import Why from "@/components/why";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero page="home" bg="./images/home.png" />
      <Why />
      <Areas />
      <PortfolioHome />
      <Partner />
      <Footer />
    </>
  );
};

export default HomePage;
