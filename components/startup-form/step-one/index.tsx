import React from "react";
import Input from "@/components/input";
import Select from "@/components/select";
import { locations, sectors } from "@/utils/data";
import ApplyLayout from "@/utils/apply-layout";

const Step1 = ({ action }: { action: any }) => {
  return (
    <ApplyLayout action={action} buttonText="Next" active={true}>
      <Input placeholder="Company Name" type="text" />
      <Select placeholder="Sector" array={sectors} />
      <Select placeholder="Location" array={locations} />
      <Input placeholder="Website" type="text" />
      <Input placeholder="Founding Year" type="text" />
    </ApplyLayout>
  );
};

export default Step1;
