//SIMULAR PARTIDAS ->

import produce from "immer";
import { useContext } from "react";
import { MatchesContext } from "../../contexts/matchProvider";
import { TableContext } from "../../contexts/tableProvider";

export const Match = () => {
  const { table, setTable } = useContext(TableContext);
  const { matches, setMatches } = useContext(MatchesContext);

  const simulateMatch = (group, team1, team2) => {
    const scoreTeam1 = Math.floor(Math.random() * 6);
    const scoreTeam2 = Math.floor(Math.random() * 6);

    const winner =
      scoreTeam1 > scoreTeam2
        ? team1
        : scoreTeam2 > scoreTeam1
        ? team2
        : Math.floor(Math.random() * 2) === 0
        ? team1
        : team2;

    const looser = winner === team1 ? team2 : team1;

    const results = {
      group_id: table.groups[group].group_id,
      team_1: table.groups[group].teams[team1].Name,
      team_2: table.groups[group].teams[team2].Name,
      scoreTeam1: scoreTeam1,
      scoreTeam2: scoreTeam2,
      winner: winner,
    };

    const newMatches = produce(matches, (draft) => {
      draft.group_stage.results.push(results);
    });
    setMatches(newMatches);

    const newTable = produce(table, (draft) => {
      draft.groups[group].teams[winner].team_stats.Wins += 1;
      draft.groups[group].teams[winner].team_stats.Points += 3;
    });
    setTable(newTable);
  };

  return (
    <div>
      <button onClick={() => simulateMatch("0", "0", "1")}>
        Advance Round
      </button>
    </div>
  );
};
