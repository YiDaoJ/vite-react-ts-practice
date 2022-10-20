import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

interface RadioButtonProps {
  checked: boolean;
  label: string;
  name: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  checked,
  label,
  name,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    setIsChecked(event.target.checked);
  };

  return (
    <RadioWrapper>
      <span className='radio-input'>
        <input
          type='radio'
          css={radioStyle}
          name={name}
          onChange={handleChange}
          checked={isChecked}
        />
      </span>
      <span className='radio-label' css={labelStyle}>
        {label}
      </span>
    </RadioWrapper>
  );
};

const radioStyle = css`
  appearance: none !important;
  margin-bottom: 0.3125rem;
  border-color: transparent;
  margin-top: 0.7rem;

  border-radius: 0.3125rem;
  display: inline-block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  outline: none;
  height: 1px;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    width: 1.3125rem;
    height: 1.3125rem;
    border: 0.0625rem solid #6c767e;
    box-shadow: 0.0625rem 0.0625rem transparent,
      -0.0625rem -0.0625rem transparent, 0.0625rem -0.0625rem transparent,
      -0.0625rem 0.0625rem transparent;
    border-radius: 100%;
  }

  :focus::before {
    border: 0.0625rem solid #000;
    outline: none;
    box-shadow: 0 0 0 0.3125rem rgb(108 118 126 / 24%);
  }

  :hover::before {
    border: 0.0625rem solid #000;
  }

  ::after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    content: "";
  }

  :checked {
    ::after {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      border: 0.375rem solid #e00;
      border-radius: 100%;
      transform-origin: 0 0;
      transform: translate(10%, -50%);
      content: "";
    }
  }
`;

const labelStyle = css`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  font-family: Verdana, Arial, sans-serif;

  cursor: pointer;
`;

const RadioWrapper = styled.label`
  display: flex;
  margin-bottom: 1rem;
  position: relative;
`;
