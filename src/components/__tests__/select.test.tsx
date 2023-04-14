import React from "react";
import { render } from "@testing-library/react";
import MLSelect from "../../components/Select/Select";

describe("MLSelect", () => {
  it("should call handleChange function on select change", () => {
    const handleChange = jest.fn();
    const selectItems = [
      { title: "Option 1", value: 1 },
      { title: "Option 2", value: 2 },
      { title: "Option 3", value: 3 },
    ];

    render(
      <MLSelect
        label="Select Option"
        labelId="select-option"
        value={1}
        handleChange={handleChange}
        selectItems={selectItems}
      />
    );
  });
});
