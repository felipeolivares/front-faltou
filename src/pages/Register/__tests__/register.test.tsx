import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../register";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("formik", () => ({
  useFormik: jest.fn(),
}));

jest.mock("../../../assets/Logo.png", () => "LogoMock");

describe("Register component", () => {
  it("should validate email when input is invalid", async () => {
    const mockHandleSubmit = jest.fn();
    (useFormik as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
    });
    const { getByLabelText } = render(<Register />);
    const emailInput = getByLabelText("Informe seu e-mail");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
  });

  it("should validate password when input is invalid", async () => {
    const mockHandleSubmit = jest.fn();
    (useFormik as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
    });
    const { getByLabelText } = render(<Register />);
    const passwordInput = getByLabelText("Informe sua senha");

    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.blur(passwordInput);
  });

  it("should validate confirmPassword when input is invalid", async () => {
    const mockHandleSubmit = jest.fn();
    (useFormik as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
    });
    const { getByLabelText } = render(<Register />);
    const passwordInput = getByLabelText("Informe sua senha");
    const confirmPasswordInput = getByLabelText("Confirme sua senha");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });
    fireEvent.blur(confirmPasswordInput);
  });

  it("should submit the form when all inputs are valid and button is clicked", async () => {
    const mockHandleSubmit = jest.fn();
    (useFormik as jest.Mock).mockReturnValue({
      handleSubmit: mockHandleSubmit,
    });
    const { getByLabelText, getByRole } = render(<Register />);
    const emailInput = getByLabelText("Informe seu e-mail");
    const passwordInput = getByLabelText("Informe sua senha");
    const confirmPasswordInput = getByLabelText("Confirme sua senha");
    const button = getByRole("button", { name: "Cadastrar" });

    fireEvent.change(emailInput, {
      target: { value: "valid-email@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });
    fireEvent.click(button);
  });
});
