import React from "react";
import { Avatar as AntdAvatar } from "antd";
import { IAvatarProps } from "./Avatar.types";
import { twMerge } from "tw-merge";
import classNames from "classnames";

const Avatar: React.FC<Readonly<IAvatarProps>> = (props) => {
    return <AntdAvatar {...props} />;
};

export default Avatar;
