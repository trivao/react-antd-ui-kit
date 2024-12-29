import Avatar from "./Avatar";
import type { IAvatarProps } from "./Avatar.types";
import { Meta } from "@storybook/react";

const meta: Meta<IAvatarProps> = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Avatar bileşeni, profil resimleri veya ikonlar göstermek için kullanılır.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        alt: {
            control: "text",
            description: "This attribute defines the alternative text describing the image.",
            defaultValue: "Avatar",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "-" },
            },
        },
        gap: {
            control: "number",
            description: "Letter type unit distance between left and right sides.",
            defaultValue: 4,
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "4" },
            },
        },
        icon: {
            control: "text",
            description: "Custom icon type for an icon avatar.",
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "-" },
            },
        },
        shape: {
            control: "select",
            options: ["circle", "square"],
            description: "The shape of avatar.",
            defaultValue: "circle",
            table: {
                type: { summary: "circle | square" },
                defaultValue: { summary: "circle" },
            },
        },
        size: {
            control: "select",
            options: ["small", "default", "large"],
            description: "The size of the avatar.",
            defaultValue: "default",
            table: {
                type: { summary: "small | default | large" },
                defaultValue: { summary: "default" },
            },
        },
        src: {
            control: "text",
            description: "The address of the image for an image avatar.",
            table: {
                type: { summary: "string | ReactNode" },
                defaultValue: { summary: "-" },
            },
        },
        srcSet: {
            control: "text",
            description: "A list of sources to use for different screen resolutions.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "-" },
            },
        },
        draggable: {
            control: "boolean",
            description: "Whether the picture is allowed to be dragged.",
            defaultValue: true,
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" },
            },
        },
        crossOrigin: {
            control: "select",
            options: ["anonymous", "use-credentials", ""],
            description: "CORS settings attributes.",
            table: {
                type: { summary: "anonymous | use-credentials | ''" },
                defaultValue: { summary: "-" },
            },
        },
        onError: {
            action: "onError",
            description: "Handler when img load error occurs.",
            table: {
                type: { summary: "() => boolean" },
                defaultValue: { summary: "-" },
            },
        },
    },
};

export default meta;

export const Default = {
    args: {
        alt: "Default Avatar",
        gap: 4,
        shape: "circle",
        size: "default",
        children: "MGO",
        src: "https://via.placeholder.com/150",
        srcSet: "",
        draggable: true,
        crossOrigin: "anonymous",
        className: "",
    },
};
