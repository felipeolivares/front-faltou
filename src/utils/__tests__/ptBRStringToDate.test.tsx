import ptBRStringToDate from "../ptBRStringToDate";

describe("ptBRStringToDate", () => {
  it("should return an empty string when input is falsy", () => {
    const result = ptBRStringToDate("");
    expect(result).toBe("");
  });

  it('should return a date string in the format "YYYY-MM-DD"', () => {
    const result = ptBRStringToDate("10/05/2023");
    expect(result).toBe("2023-5-10");
  });
});
