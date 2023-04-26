import formValidate from "../validator/formValidate";

describe("validateFields", () => {
  it("should return an empty object when no errors are found", () => {
    const values = {
      subjectName: "Math",
      startClasses: "06/07/2023",
      finishClasses: "06/07/2024",
      amountDaysClasses: "5",
      amountAbsence: "1",
      radioholiday: "Não",
      holiday: "",
      radioPct: "Sim",
      percentage: "50",
    };
    expect(formValidate(values)).toEqual(false);
  });

  it("should return an object with error message ", () => {
    const values = {
      subjectName: "",
      startClasses: "",
      finishClasses: "",
      amountDaysClasses: "",
      amountAbsence: "",
      radioholiday: "",
      holiday: "",
      radioPct: "",
      percentage: "",
    };
    const expectedErrors = {
      subjectName: "Campo obrigatório",
      startClasses: "Campo obrigatório",
      finishClasses: "Campo obrigatório",
      amountDaysClasses: "Campo obrigatório",
      amountAbsence: "Campo obrigatório",
      radioholiday: "Campo obrigatório",
      holiday: "",
      radioPct: "Campo obrigatório",
      percentage: "",
    };
    expect(formValidate(values)).toEqual(expectedErrors);
  });

  it("should return an object with error", () => {
    const values = {
      subjectName: "",
      startClasses: "1",
      finishClasses: "13$",
      amountDaysClasses: "8",
      amountAbsence: "",
      radioholiday: "Sim",
      holiday: "",
      radioPct: "Não",
      percentage: "",
    };
    const expectedErrors = {
      subjectName: "Campo obrigatório",
      startClasses: "Data inválida",
      finishClasses: "",
      amountDaysClasses: "Valor máximo é de 7 dias",
      amountAbsence: "Campo obrigatório",
      radioholiday: "",
      holiday: "Campo obrigatório",
      radioPct: "",
      percentage: "Campo obrigatório",
    };
    expect(formValidate(values)).toEqual(expectedErrors);
  });
});
