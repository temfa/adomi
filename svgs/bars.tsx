import React from "react";

const Bars = ({ action }: { action: any }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onClick={action}>
      <path d="M5 11.667H35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 20H35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 28.333H35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default Bars;
