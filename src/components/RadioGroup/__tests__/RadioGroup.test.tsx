import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "../RadioButton";
import { RadioGroup } from "../RadioGroup";

describe("RadioGroup test", () => {
  test("render RadioGroup component", () => {
    const { asFragment } = render(
      <RadioGroup label='Gender' defaultValue='female'>
        <RadioButton value='female' label='Female' />
        <RadioButton value='male' label='Male' />
      </RadioGroup>
    );
    // screen.debug(asFragment());
    expect(asFragment()).toMatchSnapshot();
  });

  test("RadioGroup change event", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <RadioGroup label='Gender' defaultValue='female'>
        <RadioButton value='female' label='Female' />
        <RadioButton value='male' label='Male' />
      </RadioGroup>
    );

    const element = screen.getByDisplayValue("male");
    await user.click(element);
    expect(element).toBeChecked();
  });
});
