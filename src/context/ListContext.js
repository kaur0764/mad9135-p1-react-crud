import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useLocalStorage("react-crud", []);
  return <ListContext.Provider value={[list, setList]} {...props} />;
}

function useList() {
  const context = useContext(ListContext);
  if (!context) throw new Error("Issue with the Provider");
  return context;
}

export { ListProvider, useList };
