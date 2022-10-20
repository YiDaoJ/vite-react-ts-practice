import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";
import { RadioButton } from "./RadioButton";

export default {
  title: "Component/Radio Group",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <RadioButton label='Kabel (KOAX)' name='accessTypeCoax' />
    <RadioButton label='Glasfaser (Fiber)' name='accessTypeFiber' />
  </RadioGroup>
);

export const Standard = Template.bind({});

Standard.args = { label: "Anschlussart" };
