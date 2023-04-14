import React from "react";
import { render } from "@testing-library/react";
import { useContext } from "react";
import { ValuesAppContext } from "../../context/contextProvider";
import { useAppContext } from "../useAppContext";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

const mockContextValue = {
  appValues: {
    // add test app values here
  },
  updateAppValues: jest.fn(),
  iduser: {
    // add test id user here
  },
  setIduser: jest.fn(),
};

describe("useAppContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return context object with correct properties", () => {
    (useContext as jest.Mock).mockReturnValueOnce(mockContextValue);
    const { appValues, updateAppValues, iduser, setIduser } = useAppContext();
    expect(appValues).toEqual(mockContextValue.appValues);
    expect(updateAppValues).toEqual(mockContextValue.updateAppValues);
    expect(iduser).toEqual(mockContextValue.iduser);
    expect(setIduser).toEqual(mockContextValue.setIduser);
  });
});
