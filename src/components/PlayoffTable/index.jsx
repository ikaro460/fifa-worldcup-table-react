import produce from "immer";
import React, { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { simulateMatch } from "../../utils/matchUtils";

export const PlayoffTable = () => {
  const { table, setTable } = useContext(TableContext);

  const playoffObj = { ...table.playoff };

  const simulatEights = () => {
    let newEightsResults = [];

    for (let i = 0; i < playoffObj.eights.length; i++) {
      const result = simulateMatch(
        playoffObj.eights[i][0],
        playoffObj.eights[i][1]
      );
      newEightsResults.push(result);
    }

    const newTable = produce(table, (draft) => {
      newEightsResults.map((matchResults, index) => {
        console.log(matchResults);
        console.log(draft.playoff.eights[index]);
        draft.playoff.eights[index].result = matchResults;
      });
      draft.current_round += 1;
    });

    console.log(newTable);

    setTable(newTable);
  };

  return (
    <div>
      <div>
        <h2>Eights</h2>
        <button onClick={() => simulatEights()}>Sim Eights</button>
        {table.playoff.eights.map((match, index) => {
          return (
            <div key={index}>
              <h4>Match {index + 1}</h4>
              <div>
                {match.team1.Name}{" "}
                {match.result ? match.result.scoreTeam1 : "*"}
              </div>
              <span>X</span>
              <div>
                {match.team2.Name}{" "}
                {match.result ? match.result.scoreTeam2 : "*"}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Quarters</h2>
        {table.playoff.quarters.map((match, index) => {
          return (
            <div key={index}>
              <h4>Match {index + 1}</h4>
              <div>
                {match.team1.Name}{" "}
                {match.result ? match.result.scoreTeam1 : "*"}
              </div>
              <span>X</span>
              <div>
                {match.team2.Name}{" "}
                {match.result ? match.result.scoreTeam2 : "*"}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Semis</h2>
        {table.playoff.semis.map((match, index) => {
          return (
            <div key={index}>
              <h4>Match {index + 1}</h4>
              <div>
                {match.team1.Name}{" "}
                {match.result ? match.result.scoreTeam1 : "*"}
              </div>
              <span>X</span>
              <div>
                {match.team2.Name}{" "}
                {match.result ? match.result.scoreTeam2 : "*"}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Final</h2>
        <div>
          {table.playoff.final.team1.Name}{" "}
          {table.playoff.final.result
            ? table.playoff.final.result.scoreTeam1
            : "*"}
        </div>
        <span>X</span>
        <div>
          {table.playoff.final.team2.Name}{" "}
          {table.playoff.final.result
            ? table.playoff.final.result.scoreTeam2
            : "*"}
        </div>
      </div>
      <div>
        <h1>Winner</h1>
        {table.playoff.final.result
          ? table.playoff.final.result.winner
          : "Undefined"}
      </div>
    </div>
  );
};
