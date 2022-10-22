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
        : // : Math.floor(Math.random() * 2) === 0
          null;

    const loser = winner === null ? null : winner === team1 ? team2 : team1;

    const matchResults = {
      group_id: table.groups[group].group_id,
      team_1: team1,
      team_2: team2,
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
          if (match.winner === null) {
            //IN CASE MATCH IS A DRAW

            draft.groups[groupIndex].teams[match.team_1].team_stats.Draws += 1;
            draft.groups[groupIndex].teams[match.team_2].team_stats.Draws += 1;
            draft.groups[groupIndex].teams[match.team_1].team_stats.Points += 1;
            draft.groups[groupIndex].teams[match.team_2].team_stats.Points += 1;
          } else {
            draft.groups[groupIndex].teams[match.winner].team_stats.Wins += 1;
            draft.groups[groupIndex].teams[match.loser].team_stats.Losses += 1;
            draft.groups[groupIndex].teams[match.winner].team_stats.Points += 3;
          }

          //SCORE STATS
          //GF
          draft.groups[groupIndex].teams[match.team_1].team_stats.GF +=
            match.scoreTeam1;
          draft.groups[groupIndex].teams[match.team_2].team_stats.GF +=
            match.scoreTeam2;

          //GA
          draft.groups[groupIndex].teams[match.team_1].team_stats.GA +=
            match.scoreTeam2;
          draft.groups[groupIndex].teams[match.team_2].team_stats.GA +=
            match.scoreTeam1;

          //GD
          //CALCULATE GD
          const GD_1 = match.scoreTeam1 - match.scoreTeam2;
          const GD_2 = match.scoreTeam2 - match.scoreTeam1;

          //SET GD
          draft.groups[groupIndex].teams[match.team_1].team_stats.GD += GD_1;
          draft.groups[groupIndex].teams[match.team_2].team_stats.GD += GD_2;
        });
      });
      draft.current_round += 1;
    });

    setTable(newTable);
  };

  const advanceRound = () => {
    return setTable({ ...table, current_round: table.current_round + 1 });
  };

  return (
    <div>
      <button onClick={() => simulateMatch(0, 0, 1)}>Advance Round</button>
      <button onClick={() => SimGroupStage()}>Sim Groups</button>
    </div>
  );
};
