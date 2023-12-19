"use client";
import Logo from "@/svgs/logo";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-body">
        <div className="loading-logo">
          <Logo />
          <p>Adomi Capital & Advisory </p>
        </div>
        <div className="loading-cont">
          <ColorRing width={48} height={48} colors={["#fff", "#fff", "#fff", "#fff", "#fff"]} />
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
