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

    // axios
    //   .post("http://localhost:3000/my/first/route", info, {
    //     mode: "no-cors",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Credentials": true,
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "same-origin",
    //   })
    //   .then(() => console.log("request sent"))
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <RadioGroup label="Language">
      <RadioButton
        label="Hello"
        name="english"
        checked={value === "english"}
        onChange={handleChange}
      />
      <RadioButton
        label="Hallo"
        name="deutsch"
        checked={value === "deutsch"}
        onChange={handleChange}
      />
    </RadioGroup>
  );
};
