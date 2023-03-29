import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Calculate, Login, Register, Support } from "pages/index";
import React from "react";

const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.support} element={<Support />} />
          <Route path={routes.calculate} element={<Calculate />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
