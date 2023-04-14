import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DateInput, { DateInputProps } from "../DateInput/dateInput";

describe("DateInput", () => {
  const defaultProps: DateInputProps = {
    value: "",
    onChange: jest.fn(),
    onBlur: jest.fn(),
    label: "Date Input",
    name: "date-input",
    id: "date-input",
  };

  it("should render with a label", () => {
    render(<DateInput {...defaultProps} />);
  });

  it("should render with a placeholder text", () => {
    render(<DateInput {...defaultProps} placeholder="Enter date" />);
  });

  it("should update input value when user types", () => {
    render(<DateInput {...defaultProps} />);
    const input = screen.getByLabelText("Date Input");
    userEvent.type(input, "01/01/2022");
  });

  it("should call onChange callback when input value changes", () => {
    const onChange = jest.fn();
    render(<DateInput {...defaultProps} onChange={onChange} />);
    const input = screen.getByLabelText("Date Input");
    userEvent.type(input, "02/02/2023");
  });

  it("should call onBlur callback when input loses focus", () => {
    const onBlur = jest.fn();
    render(<DateInput {...defaultProps} onBlur={onBlur} />);
    const input = screen.getByLabelText("Date Input");
    userEvent.type(input, "03/03/2024");
    userEvent.tab();
  });
});
