import React from "react";
import Input from "./Input";
import { IInputProps } from "./Input.types";
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} as Meta;

const Template: StoryFn<IInputProps> = (args) => <Input {...args} />;

export const Basic: StoryFn<IInputProps> = Template.bind({});
Basic.args = {
    placeholder: "Basic Input",
};
