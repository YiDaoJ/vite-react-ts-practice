import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "./RadioButton";

describe("RadioButton test", () => {
  test("render Radio Component", () => {
    const handleChange = jest.fn();
    const { asFragment } = render(
      <RadioButton
        label="Test"
        name="test"
        checked={false}
        onChange={handleChange}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Radio change event", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <RadioButton label="Test" name="test" checked onChange={handleChange} />
    );

    // const input = screen.getByRole("input");
    //  Unable to find an accessible element with the role "input"
    // Qn: difference between userEvent and fireEvent

    const label = screen.getByLabelText("Test");
    screen.debug(label);
    await user.click(label);

    expect(label).toBeChecked();
    screen.debug(label);
  });
});
