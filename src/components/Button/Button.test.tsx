import React from "react";
import { Button } from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button test", () => {
  test("render Button component", () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<Button size="large">Test</Button>);
    // screen.debug();

    expect(asFragment()).toMatchSnapshot();
  });

  test("button click event", async () => {
    const handleClick = jest.fn();
    render(
      <Button size="large" onClick={handleClick}>
        Test
      </Button>
    );
    const element = screen.getByRole("button");

    await userEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });
});