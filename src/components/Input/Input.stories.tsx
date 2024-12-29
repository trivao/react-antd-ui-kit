import React from "react";
import Input from "./Input";
import { Meta, StoryFn } from "@storybook/react/*";
import { IInputProps } from "./Input.types";

export default {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {}
} as Meta;

const Template: StoryFn<IInputProps> = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {}