import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroup.tsx";
import { RadioButton } from "./RadioButton";

export default {
  title: "Component/Radio Group",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <RadioButton value='cable' label='Kabel' />
    <RadioButton value='wifi' label='WI-FI' />
  </RadioGroup>
);

export const Standard = Template.bind({});

Standard.args = { label: "ANSCHLUSSART", defaultValue: "wifi" };
