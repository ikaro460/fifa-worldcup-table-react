import { createContext, useContext, useState } from "react";

export const TableContext = createContext();

const initialState = { current_round: 0, groups: [] };

export const TableProvider = ({ children }) => {
  const [table, setTable] = useState(initialState);

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
