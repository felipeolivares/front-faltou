import { appValues } from "models/appValues";
import { isDateInvalid } from "utils";

const formValidate = (values: appValues) => {
  let hasError = false;
  const errors = {
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

  if (!values.subjectName) {
    errors.subjectName = "Campo obrigatório";
    hasError = true;
  }
  if (!values.startClasses) {
    errors.startClasses = "Campo obrigatório";
    hasError = true;
  }
  if (values.startClasses && isDateInvalid(values.startClasses)) {
    errors.startClasses = "Data inválida";
    hasError = true;
  }
  if (!values.finishClasses) {
    errors.finishClasses = "Campo obrigatório";
    hasError = true;
  }
  if (values.finishClasses && isDateInvalid(values.finishClasses)) {
    errors.startClasses = "Data inválida";
    hasError = true;
  }
  if (
    !values.amountDaysClasses ||
    !Number(values.amountDaysClasses ? values.amountDaysClasses : "")
  ) {
    errors.amountDaysClasses = "Campo obrigatório";
    hasError = true;
  }
  if (values.amountDaysClasses && Number(values.amountDaysClasses) > 7) {
    errors.amountDaysClasses = "Valor máximo é de 7 dias";
    hasError = true;
  }
  if (!values.amountAbsence) {
    errors.amountAbsence = "Campo obrigatório";
    hasError = true;
  }
  if (!values.radioholiday) {
    errors.radioholiday = "Campo obrigatório";
    hasError = true;
  }
  if (!values.holiday && values.radioholiday === "Sim") {
    errors.holiday = "Campo obrigatório";
    hasError = true;
  }
  if (!values.radioPct) {
    errors.radioPct = "Campo obrigatório";
    hasError = true;
  }
  if (!values.percentage && values.radioPct === "Não") {
    errors.percentage = "Campo obrigatório";
    hasError = true;
  }
  return hasError ? errors : false;
};

export default formValidate;
