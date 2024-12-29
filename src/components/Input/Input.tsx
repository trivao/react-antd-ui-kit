import React from "react";
import { Input as AntdInput } from "antd";
import { IInputProps } from "./Input.types";

const Input: React.FC<Readonly<IInputProps>> = (props) => {
    return (
        <AntdInput {...props} />
    )
};

export default Input;
