import { ButtonProps } from "antd";

export interface IButtonProps extends ButtonProps {
    label: string;
    type?: "primary" | "default" | "dashed";
    onClick?: () => void;
}
