import arrangedSendValues from "../arrangedSendValues";

describe("arrangedSendValues", () => {
  const mockValues = {
    subjectName: "Math",
    startClasses: "06/07/1999",
    finishClasses: "06/07/1999",
    amountDaysClasses: "14",
    amountAbsence: "2",
    radioholiday: "Não",
    holiday: "1",
    radioPct: "Não",
    percentage: "60",
  };

  const mockValues2 = {
    subjectName: "Math",
    startClasses: "",
    finishClasses: "",
    amountDaysClasses: "14",
    amountAbsence: "2",
    radioholiday: "Não",
    holiday: "1",
    radioPct: "Não",
    percentage: "60",
  };
  it("should return appValues object with all values converted to string", () => {
    const result = arrangedSendValues(mockValues, { idsubject: 1, iduser: 2 });
    const result2 = arrangedSendValues(mockValues2, {
      idsubject: 1,
      iduser: 2,
    });
    expect(result).toEqual({
      subjectName: "Math",

      startClasses: "1999-7-6",
      finishClasses: "1999-7-6",
      amountDaysClasses: 14,
      amountAbsence: 2,
      radioholiday: "Não",
      holiday: 1,
      radioPct: "Não",
      percentage: 60,
      idusers: 2,
      idsubjects: 1,
    });
    expect(result2).toEqual({
      subjectName: "Math",
      startClasses: "",
      finishClasses: "",
      amountDaysClasses: 14,
      amountAbsence: 2,
      radioholiday: "Não",
      holiday: 1,
      radioPct: "Não",
      percentage: 60,
      idusers: 2,
      idsubjects: 1,
    });
  });
});
