export interface ButtonProps {
    label: string;
    type?: "primary" | "default" | "dashed" | "text" | "link";
    onClick?: () => void;
}
