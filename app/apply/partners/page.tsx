"use client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Step1 from "@/components/partners-form/step-one";
import Step2 from "@/components/partners-form/step-two";
import Success from "@/components/success";
import WhatsNext from "@/components/whats-next";
import { setPartnerPage } from "@/reduxtoolkit/slice/partnerPage";
import { useAppSelector } from "@/reduxtoolkit/store/store";
import { partnersForm } from "@/utils/data";
import FormLayout from "@/utils/form-layout";
import React from "react";
import { useDispatch } from "react-redux";

const PartnersApply = () => {
  const dispatch = useDispatch();
  const partners = useAppSelector((store) => store.partnerPage);
  const add = (index: number) => {
    dispatch(setPartnerPage(index));
  };
  return (
    <>
      <Hero bg="../images/partners.png" text="Innovate Together" title="Apply to Partner With Us" />
      <FormLayout
        step={partners}
        titles={partnersForm}
        back={() => {
          dispatch(setPartnerPage(partners - 1));
        }}>
        {partners === 0 ? (
          <Step1
            action={() => {
              add(1);
            }}
          />
        ) : partners === 1 ? (
          <Step2
            action={() => {
              add(2);
            }}
          />
        ) : partners === 2 ? (
          <Success />
        ) : null}
      </FormLayout>
      <WhatsNext title="Apply as a Startup instead" link="/apply/startup" type={true} />
      <Footer />
    </>
  );
};

export default PartnersApply;
