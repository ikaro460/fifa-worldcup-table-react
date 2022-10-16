import { useContext, useEffect } from "react";
import "./App.css";
import { TableContext } from "./contexts/tableProvider";
import { getTeamsFromApi, advanceRound } from "./utils/teamsUtils";

function App() {
  const { table, setTable } = useContext(TableContext);
  useEffect(() => {
    getTeamsFromApi(table, setTable);
  }, []);

  return (
    <div className="App">
      <button onClick={() => console.log(table)}>Show table on console</button>
      <button onClick={() => advanceRound(table, setTable)}>
        Advance Round
      </button>
    </div>
  );
}

export default App;
