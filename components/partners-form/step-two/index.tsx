import React from "react";
import PhoneNumber from "@/components/phone";
import Input from "@/components/input";
import Select from "@/components/select";
import { sectors, timelines } from "@/utils/data";
import ApplyLayout from "@/utils/apply-layout";

const Step2 = ({ action }: { action: any }) => {
  return (
    <ApplyLayout action={action} active={true} buttonText="Submit">
      <PhoneNumber type={true} placeholder="Investment Amount" />
      <Select placeholder="Preferred Sector" array={sectors} />
      <Select placeholder="Investment Timeline" array={timelines} />
      <Input type="textarea" placeholder="Comments" />
    </ApplyLayout>
  );
};

export default Step2;
