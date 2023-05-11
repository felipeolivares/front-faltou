import minAndMaxValue from "../minAndMaxValue";

describe("minAndMaxValue", () => {
  it('should remove leading zeros when min is not 0 and value is "0"', () => {
    const value = minAndMaxValue("0", 1, 10);
    expect(value).toBe("");
  });

  it("should return the original value when it is within the min and max range", () => {
    const value = minAndMaxValue("5", 0, 10);
    expect(value).toBe("5");
  });

  it("should return the first two digits of the value when it is greater than max", () => {
    const value = minAndMaxValue("123", 0, 99);
    expect(value).toBe("12");
  });
});
