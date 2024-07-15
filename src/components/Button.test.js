import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with label", () => {
    render(<Button label="Click Me" />);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toBeInTheDocument();
});

test("button click calls onClick", () => {
    const handleClick = jest.fn();

    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/click me/i);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
