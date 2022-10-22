import { createContext, useContext, useState } from "react";
import { generateEmptyPlayoff } from "../../utils/playoffUtils";

export const TableContext = createContext();

const initialState = {
  current_round: 0,
  groups: [],
  playoff: generateEmptyPlayoff(),
};

export const TableProvider = ({ children }) => {
  const [table, setTable] = useState(initialState);

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
