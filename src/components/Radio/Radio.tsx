import React, { ChangeEvent, useState } from "react";
import { RadioButton } from "./RadioButton";
import { RadioGroup } from "./RadioGroup";

export const Radio = () => {
  const [value, setValue] = useState<string>("english");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("event: ", event.target.name, event.target);
    setValue(event.target.name);
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
