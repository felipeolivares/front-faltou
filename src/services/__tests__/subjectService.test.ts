import api from "../../helpers/api";
import subjectService from "../subjectService";

jest.mock("../../helpers/api", () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

describe("Subject service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call getSubjectsByIduser with the correct arguments", async () => {
    const iduser = { iduser: 1 };

    await subjectService.getSubjectsByIduser(iduser);

    expect(api.get).toHaveBeenCalledWith("calculation/calculate/getSubjects", {
      params: {
        idusers: iduser.iduser,
      },
    });
  });

  it("should call postSubject with the correct arguments", async () => {
    const values = {
      /* values object */
    };

    await subjectService.postSubject(values);

    expect(api.post).toHaveBeenCalledWith("calculation/calculate", values);
  });

  it("should call updateSubject with the correct arguments", async () => {
    const values = {
      /* values object */
    };

    await subjectService.updateSubject(values);

    expect(api.put).toHaveBeenCalledWith("calculation/calculate", values);
  });

  it("should call deleteSubjectByIdSubject with the correct arguments", async () => {
    const idsubject = 1;

    await subjectService.deleteSubjectByIdSubject(idsubject);

    expect(api.delete).toHaveBeenCalledWith(
      "calculation/calculate/deleteSubject",
      {
        params: {
          idsubjects: idsubject,
        },
      }
    );
  });

  it("should call deleteSubjectByUserId with the correct arguments", async () => {
    const iduser = 1;

    await subjectService.deleteSubjectByUserId(iduser);

    expect(api.delete).toHaveBeenCalledWith(
      "calculation/calculate/deleteSubjects",
      {
        params: {
          idusers: iduser,
        },
      }
    );
  });
});
