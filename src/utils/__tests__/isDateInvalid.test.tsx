import isDateInvalid from "../isDateInvalid";

describe("isDateInvalid", () => {
  it("should return true for an invalid date", () => {
    expect(isDateInvalid("31/04/2023")).toBe(true);
  });

  it("should return false for a valid date", () => {
    expect(isDateInvalid("28/02/2023")).toBe(false);
  });
});
