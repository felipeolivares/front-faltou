import formValidate from "../validator/formValidate";
import { appValues } from "../../../models/appValues";
import { isDateInvalid } from "../../../utils";

jest.mock("../../../utils", () => ({
  isDateInvalid: jest.fn(),
}));

describe("formValidate", () => {
  const values: appValues = {
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

  it("should return false when there are no errors", () => {
    const result = formValidate({
      ...values,
      subjectName: "Math",
      startClasses: "2022-04-25",
      finishClasses: "2022-05-30",
      amountDaysClasses: "5",
      amountAbsence: "0",
      radioholiday: "Não",
      radioPct: "Sim",
      percentage: "80",
    });
    expect(result).toBe(false);
  });
});
