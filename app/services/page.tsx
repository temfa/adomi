import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Service from "@/components/service";
import ServicesIntro from "@/components/services-intro";
import WhatsNext from "@/components/whats-next";
import React from "react";

const Services = () => {
  return (
    <>
      <Hero bg="./images/services.png" title="Our Cutting-Edge Financial and Innovation Services" text="Elevating Possibilities " />
      <ServicesIntro
        text1="We are committed to driving innovation and strategic growth. Our diverse range of services is designed to support ventures across various industries, helping them reach
            their full potential."
        text2="Discover how our expertise and collaborative approach can elevate your venture to new heights. Explore our comprehensive services tailored to meet the unique needs of
            your business."
      />
      <Service />
      <WhatsNext title="Our Portfolio" link="/portfolio" type={false} />
      <Footer />
    </>
  );
};

export default Services;
