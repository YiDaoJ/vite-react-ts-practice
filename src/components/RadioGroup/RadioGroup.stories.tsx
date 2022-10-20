import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroupNew";
import { RadioButton } from "./RadioButtonNew";

export default {
  title: "Component/Radio Group New",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  // <RadioGroup {...args}>
  //   <RadioButton label='Kabel (KOAX)' name='accessTypeCoax' />
  //   <RadioButton label='Glasfaser (Fiber)' name='accessTypeFiber' />
  // </RadioGroup>

  <RadioGroup {...args}>
    <RadioButton value='cable' label='Kabel' />
    <RadioButton value='wifi' label='WI-FI' />
  </RadioGroup>
);

export const Standard = Template.bind({});

Standard.args = { label: "ANSCHLUSSART", defaultValue: "wifi" };
