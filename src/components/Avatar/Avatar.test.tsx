import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import { IAvatarProps } from "./Avatar.types";

jest.mock("antd", () => ({
    Avatar: jest.fn(({ ...props }) => <div data-testid="antd-avatar" {...props} />),
}));

describe("Avatar Component", () => {
    it("renders without crashing", () => {
        render(<Avatar />);
        expect(screen.getByTestId("antd-avatar")).toBeInTheDocument();
    });

    it("passes all props to the Ant Design Avatar component", () => {
        const props: IAvatarProps = {
            src: "https://example.com/avatar.png",
            alt: "Test Avatar",
            icon: <span data-testid="custom-icon">Icon</span>,
            style: { backgroundColor: "red" },
            className: "custom-class",
            children: <span data-testid="children-content">Children</span>,
        };

        render(<Avatar {...props} />);

        const antdAvatar = screen.getByTestId("antd-avatar");

        expect(antdAvatar).toHaveAttribute("src", props.src);
        expect(antdAvatar).toHaveAttribute("alt", props.alt);
        expect(antdAvatar).toHaveStyle("background-color: red;");
        expect(antdAvatar).toHaveClass("custom-class");
        expect(screen.getByTestId("children-content")).toBeInTheDocument();
    });

    it("should render antd avatar with children prop", () => {
        render(<Avatar>Test Children</Avatar>);
        expect(screen.getByText("Test Children")).toBeInTheDocument();
    });

    it("should render antd avatar with src prop", () => {
        render(<Avatar src="test.png" />);
        const antdAvatar = screen.getByTestId("antd-avatar");
        expect(antdAvatar).toHaveAttribute("src", "test.png");
    });

    it("should render antd avatar with alt prop", () => {
        render(<Avatar alt="test alt text" />);
        const antdAvatar = screen.getByTestId("antd-avatar");
        expect(antdAvatar).toHaveAttribute("alt", "test alt text");
    });

    it("should render antd avatar with style prop", () => {
        render(<Avatar style={{ color: "red" }} />);
        const antdAvatar = screen.getByTestId("antd-avatar");
        expect(antdAvatar).toHaveStyle("color: red");
    });

    it("should render antd avatar with className prop", () => {
        render(<Avatar className="testClassName" />);
        const antdAvatar = screen.getByTestId("antd-avatar");
        expect(antdAvatar).toHaveClass("testClassName");
    });

    test("renders Avatar with default props as a snapshot", () => {
        const { container } = render(<Avatar />);
        expect(container).toMatchSnapshot();
      });
      
      test("renders Avatar with custom props as a snapshot", () => {
        const props: IAvatarProps = {
          src: "https://example.com/avatar.png",
          alt: "Test Avatar",
          icon: <span data-testid="custom-icon">Icon</span>,
          style: { backgroundColor: "red" },
          className: "custom-class",
          children: <span data-testid="children-content">Children</span>,
        };
      
        const { container } = render(<Avatar {...props} />);
        expect(container).toMatchSnapshot();
      });
});
