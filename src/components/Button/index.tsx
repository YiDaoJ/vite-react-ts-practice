import React, { FC } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  size?: ButtonSize;
  onClick(evet: MouseEvent<HTMLButtonElement>): void;
}

const getSize = (size?: ButtonSize): SerializedStyles => {
  switch (size) {
    case "small":
      return css`
        font-size: 1rem;
        width: 7rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      `;
    case "large":
      return css`
        font-size: 2.5rem;
        width: 15rem;
        height: 6rem;
        border-radius: 1.5rem;
      `;
    case "medium":
    default:
      return css`
        font-size: 1.8rem;
        width: 12rem;
        height: 4rem;
        border-radius: 1rem;
      `;
  }
};

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  background: #ffca2ce6;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  transition: all 0.4s ease;
  &:hover {
    opacity: 0.9;
  }

  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #fff;
  &:active {
    box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7 inset,
      -0.5vmin -0.5vmin 1vmin #fff inset;
  }
  ${({ size }) => getSize(size)};
`;
