import api from "../helpers/api";

const postLogin = (email: string, password: string) => {
  return api.post("login", {
    email: email,
    password: password,
  });
};

const postRegister = (email: string, password: string) => {
  return api.post("register", {
    email: email,
    password: password,
  });
};

const loginService = {
  postLogin,
  postRegister,
};

export default loginService;
