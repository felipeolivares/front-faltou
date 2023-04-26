import dateToString from "../dateToString";

describe("dateToString", () => {
  it("should return an empty string when the date is not defined", () => {
    expect(dateToString("")).toEqual("");
  });

  it('should return a string in the format "dd/mm/yyyy"', () => {
    expect(dateToString("2023-04-25T12:34:56")).toEqual("25/04/2023");
    expect(dateToString("2023-01-01T00:00:00")).toEqual("01/01/2023");
    expect(dateToString("2023-12-31T23:59:59")).toEqual("31/12/2023");
  });
});
