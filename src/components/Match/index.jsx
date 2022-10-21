import produce from "immer";
import { useContext } from "react";
import { MatchesContext } from "../../contexts/matchProvider";
import { TableContext } from "../../contexts/tableProvider";
import { matchMaking } from "../../utils/matchUtils";

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

    const loser = winner === team1 ? team2 : team1;

    const matchResults = {
      group_id: table.groups[group].group_id,
      team_1: table.groups[group].teams[team1].Name,
      team_2: table.groups[group].teams[team2].Name,
      scoreTeam1: scoreTeam1,
      scoreTeam2: scoreTeam2,
      winner: winner,
      loser: loser,
    };

    return matchResults;
  };

  const simulateGroup = (group) => {
    let newGroupResults = [];

    for (let i = 0; i < matchMaking.length; i++) {
      const result = simulateMatch(group, matchMaking[i][0], matchMaking[i][1]);
      newGroupResults.push(result);
    }

    return newGroupResults;
    // updateStates(group, newMatchesResults);
  };

  const SimGroupStage = () => {
    let newMatchesResults = [];

    for (let i = 0; i < table.groups.length; i++) {
      const result = simulateGroup(i);
      newMatchesResults.push(result);
    }
    updateStates(newMatchesResults);
  };

  const updateStates = (newMatchesResults) => {
    const newMatches = produce(matches, (draft) => {
      draft.group_stage.results.push([newMatchesResults]);
    });

    setMatches(newMatches);

    const newTable = produce(table, (draft) => {
      newMatchesResults.forEach((group, groupIndex) => {
        group.forEach((match) => {
          draft.groups[groupIndex].teams[match.winner].team_stats.Wins += 1;
          draft.groups[groupIndex].teams[match.winner].team_stats.Points += 3;
          draft.groups[groupIndex].teams[match.loser].team_stats.Losses += 1;
        });
      });
    });

    setTable(newTable);
  };

  return (
    <div>
      <button onClick={() => simulateMatch(0, 0, 1)}>Advance Round</button>
      <button onClick={() => SimGroupStage()}>Sim Groups</button>
    </div>
  );
};
