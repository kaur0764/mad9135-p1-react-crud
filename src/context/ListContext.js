import React, { useContext, createContext, useState } from "react";

const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState("");
  return <ListContext.Provider value={[list, setList]} {...props} />;
}

function useList() {
  const context = useContext(ListContext);
  if (!context) throw new Error("Issue with the Provider");
  return context;
}

export { ListProvider, useList };
