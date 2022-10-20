import { createContext, useContext, useState } from "react";

export const MatchesContext = createContext();

export const MatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState({});

  return (
    <MatchesContext.Provider value={{ matches, setMatches }}>
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatches = () => useContext(MatchesContext);
