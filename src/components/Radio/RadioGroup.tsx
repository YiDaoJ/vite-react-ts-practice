import { css } from "@emotion/react";
import React, { FC, PropsWithChildren } from "react";

interface RadioGroupProps {
  label?: string;
}

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = ({
  label,
  children,
}) => {
  return (
    <div className="radio-group__container" data-testid="radio-group">
      {label && (
        <label className="radio-group__label" css={GroupLabelStyle}>
          {label}
        </label>
      )}
      <div className="radio-group__control">{children}</div>
    </div>
  );
};

const GroupLabelStyle = css`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  margin-bottom: 0.5rem;
  color: #6c767e;
`;
