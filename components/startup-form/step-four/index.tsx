import Upload from "@/components/upload";
import ApplyLayout from "@/utils/apply-layout";
import React from "react";

const Step4 = ({ action }: { action: any }) => {
  return (
    <ApplyLayout buttonText="Submit" action={action} active={true}>
      <Upload placeholder="Upload your Pitch Deck" />
      <Upload placeholder="Upload your Financial Projections" />
      <Upload placeholder="Upload your Business Plan" />
    </ApplyLayout>
  );
};

export default Step4;
