import { render } from "@testing-library/react";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "../Form/form";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("Calculate component", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
    (useLocation as jest.Mock).mockClear();
  });
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  (useLocation as jest.Mock).mockReturnValue({ pathname: "/other-page" });
  it("renders the Form component", () => {
    render(<Form />);
  });
});
