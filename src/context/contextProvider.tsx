import { createContext, useState, useCallback, ReactNode } from "react";
import { appValues } from "models/appValues";
import { idUsers } from "models/idUsers";
import initialValues from "helpers/initialValues";

type ValuesAppContextType = {
  appValues: appValues;
  updateAppValues: (newState: appValues) => void;
  iduser: idUsers;
  setIduser: (newState: idUsers) => void;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  appValues: {},
  updateAppValues: () => undefined,
  iduser: {},
  setIduser: () => undefined,
};

export const ValuesAppContext =
  createContext<ValuesAppContextType>(initialState);

export const AppContextProvider = ({ children }: Props) => {
  const [appValues, setAppValues] = useState<appValues>(initialValues);
  const updateAppValues = useCallback((data: any) => {
    setAppValues(data);
  }, []);

  const initialIduser: idUsers = {
    iduser: undefined,
    idsubject: undefined,
  };
  const [iduser, setIduser] = useState<idUsers>(initialIduser);

  return (
    <ValuesAppContext.Provider
      value={{
        appValues,
        updateAppValues,
        iduser,
        setIduser,
      }}
    >
      {children}
    </ValuesAppContext.Provider>
  );
};
