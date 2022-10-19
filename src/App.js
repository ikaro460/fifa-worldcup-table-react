import { useContext } from "react";
import "./App.css";
import { GroupsTable } from "./components/GroupsTable";
import { TableContext } from "./contexts/tableProvider";
import { advanceRound } from "./utils/groupUtils";

function App() {
  const { table, setTable } = useContext(TableContext);

  return (
    <div className="App">
      <button onClick={() => console.log(table)}>Show table on console</button>
      <button onClick={() => advanceRound(table, setTable)}>
        Advance Round
      </button>
      <GroupsTable />
    </div>
  );
}

export default App;
