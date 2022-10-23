import "./App.css";
import { Groups } from "./components/Groups";
import { GroupMatch } from "./components/GroupMatch";
import { Playoff } from "./components/Playoff";
import { BasicTabs } from "./components/Tabs";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GroupMatch />
      <Groups />
      <Playoff />
      <BasicTabs />
      <GlobalStyle />
    </div>
  );
}

export default App;
