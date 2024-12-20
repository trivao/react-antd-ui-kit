import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
    test("renders the given label", () => {
        const testLabel = "Test Button";
        render(<Button label={testLabel} />);

        const buttonElement = screen.getByRole("button", { name: testLabel });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent(testLabel);
    });

    test("calls onClick function when clicked", () => {
        const handleClick = jest.fn();
        const testLabel = "Click Me";

        render(<Button label={testLabel} onClick={handleClick} />);

        const buttonElement = screen.getByRole("button", { name: testLabel });
        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("applies the 'type' prop correctly", () => {
        render(<Button label="Primary Button" type="primary" />);

        const buttonElement = screen.getByRole("button", { name: "Primary Button" });
        // Antd applies a specific class (e.g. "ant-btn-primary") when type="primary"
        expect(buttonElement).toHaveClass("ant-btn-primary");
    });

    // Snapshot Test
    test("matches snapshot", () => {
        const { asFragment } = render(<Button label="Snapshot Test Button" type="default" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
