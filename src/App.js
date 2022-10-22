import { useContext, useEffect } from "react";
import "./App.css";
import { Match } from "./components/Match";
import { BasicTabs } from "./components/Tabs";
import { MatchesContext } from "./contexts/matchProvider";
import { TableContext } from "./contexts/tableProvider";

function App() {
  const { table } = useContext(TableContext);
  const { matches } = useContext(MatchesContext);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  return (
    <div className="App">
      <button onClick={() => console.log(table, matches)}>
        Show table on console
      </button>
      <Match />
      <BasicTabs />
    </div>
  );
}

export default App;
