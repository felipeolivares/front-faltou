import React from "react";
import { render } from "@testing-library/react";
import Support from "../support";
import { useNavigate, useLocation } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe("Support component", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
    (useLocation as jest.Mock).mockClear();
  });
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  (useLocation as jest.Mock).mockReturnValue({ pathname: "/other-page" });
  it("should render", () => {
    render(<Support />);
  });
});
