import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MLRadio from "../../components/Radio/radio";

describe("MLRadio", () => {
  const handleChange = jest.fn();
  const defaultProps = {
    labelId: "labelId",
    defaultValue: "",
    name: "radio",
    value: "",
    value1Radio: "Value 1",
    value2Radio: "Value 2",
    handleChange: handleChange,
  };

  afterEach(() => {
    handleChange.mockClear();
  });

  it("renders correctly", () => {
    render(<MLRadio {...defaultProps} />);
  });

  it("should call handleChange function on radio button click", () => {
    const { getByLabelText } = render(<MLRadio {...defaultProps} />);
    fireEvent.click(getByLabelText(defaultProps.value2Radio));
    expect(handleChange).toHaveBeenCalled();
  });
});
