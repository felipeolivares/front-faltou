import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import Login from "../login";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("formik", () => ({
  useFormik: jest.fn(),
}));

jest.mock("../../../assets/Logo.png", () => "LogoMock");

describe("Login", () => {
  it("submits the form on button click", async () => {
    const mockHandleSubmit = jest.fn();
    (useFormik as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
    });

    const { getByLabelText } = render(<Login />);
    const emailField = getByLabelText("Informe seu e-mail");
    const passwordField = getByLabelText("Informe sua senha");

    fireEvent.change(emailField, { target: { value: "test@test.com" } });
    fireEvent.change(passwordField, { target: { value: "password" } });
  });

  it("navigates to register page when 'Crie uma conta' is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const { getByText } = render(<Login />);
    const createAccountLink = getByText("Crie uma conta.");

    fireEvent.click(createAccountLink);

    expect(mockNavigate).toHaveBeenCalledWith("/register");
  });
});
