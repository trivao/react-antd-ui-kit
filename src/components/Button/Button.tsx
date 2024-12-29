import React from "react";
import { Button as AntdButton } from "antd";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = (props) => {
    const { label, type = "default", onClick, ...rest } = props;

    const buttonClasses = `
        px-4 py-2 rounded-md font-medium transition-all
        ${type === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
        ${type === 'default' ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50' : ''}
        ${type === 'dashed' ? 'bg-white text-gray-700 border border-dashed border-gray-300 hover:bg-gray-50' : ''}
    `;

    return (
        <AntdButton
            type={type}
            onClick={onClick}
            className={buttonClasses}
            {...rest}
        >
            {label}
        </AntdButton>
    );
};

export default Button;

