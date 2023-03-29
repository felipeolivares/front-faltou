import { appTotalValues } from "models/appTotalValues";
import { idUsers } from "models/idUsers";
import api from "../helpers/api";

const getSubjectsByIduser = (iduser: idUsers) => {
  return api.get("calculation/calculate/getSubjects", {
    params: {
      idusers: iduser.iduser,
    },
  });
};

const postSubject = (values: appTotalValues) => {
  return api.post("calculation/calculate", values);
};

const updateSubject = (values: appTotalValues) => {
  return api.put("calculation/calculate", values);
};

const deleteSubjectByIdSubject = (idsubject: number) => {
  return api.delete(`calculation/calculate/deleteSubject`, {
    params: {
      idsubjects: idsubject,
    },
  });
};

const deleteSubjectByUserId = (iduser: number) => {
  return api.delete(`calculation/calculate/deleteSubjects`, {
    params: {
      idusers: iduser,
    },
  });
};

const subjectService = {
  getSubjectsByIduser,
  postSubject,
  updateSubject,
  deleteSubjectByIdSubject,
  deleteSubjectByUserId,
};

export default subjectService;
