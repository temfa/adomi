import Input from "@/components/input";
import ApplyLayout from "@/utils/apply-layout";
import React from "react";

const Step3 = ({ action }: { action: any }) => {
  return (
    <ApplyLayout buttonText="Next" action={action} active={true}>
      <Input type="text" placeholder="Founder/CEO Name" />
      <Input type="textarea" placeholder="Team Members" />
      <Input type="textarea" placeholder="Brief Company Overview" />
    </ApplyLayout>
  );
};

export default Step3;
