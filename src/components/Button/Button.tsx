import React from "react";
import { Button as AntdButton } from "antd";
import { ButtonProps } from "./Button.types";
import "./Button.styles.scss";

export const Button: React.FC<ButtonProps> = (props) => {
    const { label, type = "default", onClick } = props;

    return (
        <AntdButton type={type} onClick={onClick}>
            {label}
        </AntdButton>
    );
};

export default Button;
