import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioButton } from "./RadioButton";

export default {
  title: "Component/Radio Button",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Standard = Template.bind({});
Standard.args = { label: "Radio", name: "radio" };
