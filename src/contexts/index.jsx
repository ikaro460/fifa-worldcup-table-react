import { MatchesProvider } from "./matchProvider";
import { TableProvider } from "./tableProvider";

export const Providers = ({ children }) => {
  return (
    <MatchesProvider>
      <TableProvider>{children}</TableProvider>;
    </MatchesProvider>
  );
};
