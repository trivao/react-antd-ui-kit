import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { IButtonProps } from "./Button.types";

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["primary", "default", "dashed"],
            },
        },
        label: {
            control: "text",
        },
        onClick: { action: "clicked" },
    },
} as Meta;

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Default Button",
    type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button",
    type: "primary",
};

export const Dashed = Template.bind({});
Dashed.args = {
    label: "Dashed Button",
    type: "dashed",
};
