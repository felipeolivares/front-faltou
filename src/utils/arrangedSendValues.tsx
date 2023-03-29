import { appTotalValues } from "models/appTotalValues";
import { appValues } from "models/appValues";
import { idUsers } from "models/idUsers";
import ptBRStringToDate from "./ptBRStringToDate";

const arrangedSendValues = (values: appValues, iduser: idUsers) => {
  const object: appTotalValues = {
    subjectName: values.subjectName,
    startClasses: ptBRStringToDate(
      values.startClasses ? values.startClasses : ""
    ),
    finishClasses: ptBRStringToDate(
      values.finishClasses ? values.finishClasses : ""
    ),
    amountDaysClasses: Number(values.amountDaysClasses),
    amountAbsence: Number(values.amountAbsence),
    radioholiday: values.radioholiday,
    holiday: Number(values.holiday),
    radioPct: values.radioPct,
    percentage: Number(values.percentage),
    idusers: iduser.iduser,
    idsubjects: iduser.idsubject,
  };
  return object;
};

export default arrangedSendValues;
