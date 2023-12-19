import Input from "@/components/input";
import PhoneNumber from "@/components/phone";
import Select from "@/components/select";
import ApplyLayout from "@/utils/apply-layout";
import { fundingStatus } from "@/utils/data";
import React from "react";

const Step2 = ({ action }: { action: any }) => {
  return (
    <ApplyLayout buttonText="Next" action={action} active={true}>
      <PhoneNumber type={true} placeholder="Funding Amount" />
      <Select placeholder="Current Funding Status" array={fundingStatus} />
      <Input placeholder="Use of Funds" type="textarea" />
      <Input placeholder="Milestones Achieved" type="textarea" />
    </ApplyLayout>
  );
};

export default Step2;
