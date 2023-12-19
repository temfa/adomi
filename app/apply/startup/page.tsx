"use client";
import Hero from "@/components/hero";
import Step4 from "@/components/startup-form/step-four";
import Step1 from "@/components/startup-form/step-one";
import Step3 from "@/components/startup-form/step-three";
import Step2 from "@/components/startup-form/step-two";
import Success from "@/components/success";
import { setStartupPage } from "@/reduxtoolkit/slice/startupPage";
import { useAppSelector } from "@/reduxtoolkit/store/store";
import { startupForm } from "@/utils/data";
import FormLayout from "@/utils/form-layout";
import React from "react";
import { useDispatch } from "react-redux";

const Startup = () => {
  const dispatch = useDispatch();
  const startup = useAppSelector((store) => store.startupPage);
  const add = (index: number) => {
    dispatch(setStartupPage(index));
  };
  return (
    <>
      <Hero bg="../images/startup.png" text="Transform Ideas into Reality" title="Apply to Join Us" />
      <FormLayout
        step={startup}
        titles={startupForm}
        back={() => {
          dispatch(setStartupPage(startup - 1));
        }}>
        {startup === 0 ? (
          <Step1
            action={() => {
              add(1);
            }}
          />
        ) : startup === 1 ? (
          <Step2
            action={() => {
              add(2);
            }}
          />
        ) : startup === 2 ? (
          <Step3
            action={() => {
              add(3);
            }}
          />
        ) : startup === 3 ? (
          <Step4
            action={() => {
              add(4);
            }}
          />
        ) : (
          <Success />
        )}
      </FormLayout>
    </>
  );
};

export default Startup;
