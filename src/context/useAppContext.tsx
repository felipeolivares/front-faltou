import { useContext } from "react";
import { ValuesAppContext } from "../context/contextProvider";

export const useAppContext = () => {
  const context = useContext(ValuesAppContext);
  return { ...context };
};
