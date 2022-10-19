import { render, screen } from "@testing-library/react";
import React from "react";
import { RadioButton } from "../RadioButton";
import { RadioGroup } from "../RadioGroup";

describe("RadioGroup test", () => {
  test("render RadioGroup component", () => {
    const handleChange = jest.fn();

    render(
      <RadioGroup label="Language">
        <RadioButton label="Hello" name="english" onChange={handleChange} />
        <RadioButton label="Hallo" name="deutsch" onChange={handleChange} />
      </RadioGroup>
    );

    const radioGroup = screen.getByTestId("radio-group");
    screen.debug(radioGroup);
  });
});
