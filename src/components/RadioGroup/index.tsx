import React, { FC } from "react";
import { RadioGroup } from "./RadioGroupNew";
import { RadioButton } from "./RadioButtonNew";

export const RadioGroupRebuild: FC = () => {
  const handleChange = (value: string) => {
    const info = { selected: value };

    fetch("http://localhost:4000/test", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <RadioGroup
      label='ANSCHLUSSART'
      defaultValue='wifi'
      onChange={handleChange}
    >
      <RadioButton value='cable' label='Kabel' />
      <RadioButton value='wifi' label='WI-FI' />
    </RadioGroup>
  );
};
