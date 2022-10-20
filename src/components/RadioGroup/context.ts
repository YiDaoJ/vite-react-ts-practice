import React from "react";

export interface RadioGroupContextValue {
  name: string | undefined;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => void;
  selected: any;
}

const RadioGroupContext = React.createContext<
  RadioGroupContextValue | undefined
>(undefined);

export default RadioGroupContext;
