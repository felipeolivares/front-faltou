import { appTotalValues } from "models/appTotalValues";
import { appValues } from "models/appValues";
import dateToString from "./dateToString";

const arrangedReturnValues = (values: appTotalValues) => {
  const object: appValues = {
    subjectName: values.subjectName,
    startClasses: dateToString(values.startClasses ? values.startClasses : ""),
    finishClasses: dateToString(
      values.finishClasses ? values.finishClasses : ""
    ),
    amountDaysClasses: values.amountDaysClasses?.toString(),
    amountAbsence: values.amountAbsence?.toString(),
    radioholiday: values.radioholiday,
    holiday: values.holiday?.toString(),
    radioPct: values.radioPct,
    percentage: values.percentage?.toString(),
  };
  return object;
};

export default arrangedReturnValues;
