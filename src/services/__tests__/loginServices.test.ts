import api from "../../helpers/api";
import loginService from "../loginService";

jest.mock("../../helpers/api", () => ({
  post: jest.fn(),
}));

describe("Login service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call postLogin with the correct arguments", async () => {
    const email = "test@test.com";
    const password = "123456";

    await loginService.postLogin(email, password);

    expect(api.post).toHaveBeenCalledWith("login", {
      email,
      password,
    });
  });

  it("should call postRegister with the correct arguments", async () => {
    const email = "test@test.com";
    const password = "123456";

    await loginService.postRegister(email, password);

    expect(api.post).toHaveBeenCalledWith("register", {
      email,
      password,
    });
  });
});
