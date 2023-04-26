import allowNumbersOnly from "../allowNumbersOnly";

describe("Allow numbers only", () => {
  it("should return empty string when value is an empty string", () => {
    expect(allowNumbersOnly("")).toEqual("");
  });

  it("should remove non-numeric characters from string", () => {
    expect(allowNumbersOnly("abc123def456")).toEqual("123456");
    expect(allowNumbersOnly("1a2b3c4d5e6f")).toEqual("123456");
    expect(allowNumbersOnly("12-34-56")).toEqual("123456");
    expect(allowNumbersOnly("12.34.56")).toEqual("123456");
  });
});
