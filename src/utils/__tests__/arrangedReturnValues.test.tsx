import arrangedReturnValues from "../arrangedReturnValues";

describe("arrangedReturnValues", () => {
  const mockValues = {
    subjectName: "Math",
    startClasses: "1999-07-06",
    finishClasses: "1999-07-06",
    amountDaysClasses: 14,
    amountAbsence: 2,
    radioholiday: "Não",
    holiday: 1,
    radioPct: "Não",
    percentage: 60,
  };

  const mockValues2 = {
    subjectName: "Math",
    startClasses: "",
    finishClasses: "",
    amountDaysClasses: 14,
    amountAbsence: 2,
    radioholiday: "Não",
    holiday: 1,
    radioPct: "Não",
    percentage: 60,
  };
  it("should return appValues object with all values converted to string", () => {
    const result = arrangedReturnValues(mockValues);
    const result2 = arrangedReturnValues(mockValues2);
    expect(result).toEqual({
      subjectName: "Math",
      startClasses: "06/07/1999",
      finishClasses: "06/07/1999",
      amountDaysClasses: "14",
      amountAbsence: "2",
      radioholiday: "Não",
      holiday: "1",
      radioPct: "Não",
      percentage: "60",
    });
    expect(result2).toEqual({
      subjectName: "Math",
      startClasses: "",
      finishClasses: "",
      amountDaysClasses: "14",
      amountAbsence: "2",
      radioholiday: "Não",
      holiday: "1",
      radioPct: "Não",
      percentage: "60",
    });
  });
});
