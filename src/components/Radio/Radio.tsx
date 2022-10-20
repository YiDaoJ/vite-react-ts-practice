import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { RadioButton } from "./RadioButton";
import { RadioGroup } from "./RadioGroup";

export const Radio = () => {
  const [value, setValue] = useState<string>("english");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("event: ", event.target.name, event.target);
    setValue(event.target.name);

    const info = { selected: event.target.name };

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
    <RadioGroup label='Anschlussart'>
      <RadioButton
        label='Kabel (KOAX)'
        name='accessTypeCoax'
        checked={value === "accessTypeCoax"}
        onChange={handleChange}
      />
      <RadioButton
        label='Glasfaser (Fiber)'
        name='accessTypeFiber'
        checked={value === "accessTypeFiber"}
        onChange={handleChange}
      />
    </RadioGroup>
  );
};
