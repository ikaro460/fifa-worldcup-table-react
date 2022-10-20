//SIMULAR PARTIDAS ->

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

    const results = {
      group_id: table.groups[group].group_id,
      team_1: table.groups[group].teams[team1].Name,
      team_2: table.groups[group].teams[team2].Name,
      scoreTeam1: scoreTeam1,
      scoreTeam2: scoreTeam2,
      winner: winner,
    };

    setMatches((current) => {
      console.log(table.groups[group].teams[winner]);
      return {
        ...current,
        group_stage: current.group_stage
          ? [...current.group_stage, results]
          : [results],
      };
    });

    setTable((current) => ({
      ...current,
      groups: [
        ...current.groups,
        {
          ...current.groups[group],
          teams: {
            ...current.groups[group].teams,
            [team1]: {
              ...current.groups[group].teams[team1],
              team_stats: {
                ...current.groups[group].teams[team1].team_stats,
                Wins: 3,
              },
            },
          },
        },
      ],
    }));
  };
  console.log(table);

  return (
    <div>
      <button onClick={() => simulateMatch(0, 0, 1)}>Advance Round</button>
    </div>
  );
};
