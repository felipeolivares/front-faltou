import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  AppContextProvider,
  ValuesAppContext,
} from "../../context/contextProvider";

describe("AppContextProvider", () => {
  test("should render children", () => {
    render(
      <AppContextProvider>
        <div>Hello World!</div>
      </AppContextProvider>
    );
  });

  test("should update appValues and iduser", () => {
    const Wrapper = () => {
      const [state, setState] = React.useState({
        appValues: {},
        iduser: {},
      });

      return (
        <ValuesAppContext.Provider
          value={{
            appValues: state.appValues,
            updateAppValues: (newState: any) =>
              setState({ ...state, appValues: newState }),
            iduser: state.iduser,
            setIduser: (newState: any) =>
              setState({ ...state, iduser: newState }),
          }}
        >
          <div>
            <button
              onClick={() =>
                setState({
                  ...state,
                  appValues: { someValue: true },
                  iduser: { iduser: "123", idsubject: "456" },
                })
              }
            >
              Update Values
            </button>
          </div>
        </ValuesAppContext.Provider>
      );
    };

    const { getByText } = render(<Wrapper />);

    fireEvent.click(getByText("Update Values"));
  });
});
