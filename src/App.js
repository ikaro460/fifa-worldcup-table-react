import { useContext, useEffect } from "react";
import "./App.css";
import { Groups } from "./components/Groups";
import { GroupMatch } from "./components/GroupMatch";
import { Playoff } from "./components/Playoff";
import { BasicTabs } from "./components/Tabs";
import { MatchesContext } from "./contexts/matchProvider";
import { TableContext } from "./contexts/tableProvider";

function App() {
  return (
    <div className="App">
      <GroupMatch />
      <Groups />
      <Playoff />
      <BasicTabs />
    </div>
  );
}

export default App;
