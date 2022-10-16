import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [table, setTable] = useState({ current_round: 0 });

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
