import { render } from "@testing-library/react";
import Calculate from "../calculate";
import { useNavigate, useLocation } from "react-router-dom";

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
  it("renders the Header component", () => {
    render(<Calculate />);
  });
});
