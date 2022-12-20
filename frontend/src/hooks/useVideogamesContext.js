import { VideogamesContext } from "../context/VideogamesContext";
import { useContext } from "react";

export const useVideogamesContext = () => {
  const context = useContext(VideogamesContext);

  if (!context) {
    throw Error(
      "useVideogamesContext must be used inside a VideogamesContextProvider"
    );
  }

  return context;
};
