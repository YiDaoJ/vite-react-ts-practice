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
    <RadioButton value='a' label='Option A' />
    <RadioButton value='b' label='Option B' />
  </RadioGroup>
);

export const Standard = Template.bind({});

Standard.args = { label: "Please select:", defaultValue: "a" };
