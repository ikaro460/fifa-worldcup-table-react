import { createContext, useContext, useState } from "react";

export const MatchesContext = createContext();

const initialState = {
  group_stage: {
    results: [],
  },
};

export const MatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState(initialState);

  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatches = () => useContext(MatchesContext);
