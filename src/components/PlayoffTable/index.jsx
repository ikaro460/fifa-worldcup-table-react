import produce from "immer";
import React, { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { simulateMatch } from "../../utils/matchUtils";

export const PlayoffTable = () => {
  const { table, setTable } = useContext(TableContext);

  const simulatRound = (round) => {
    console.log(round);
    let newResults = [];

    for (let i = 0; i < round.length; i++) {
      const result = simulateMatch(
        round[i].team1,
        round[i].team2,
        table.current_round
      );
      newResults.push(result);
    }

    table.current_round === 1
      ? updateEights(newResults)
      : table.current_round === 2
      ? updateQuarters(newResults)
      : table.current_round === 3
      ? updateSemis(newResults)
      : table.current_round === 4
      ? updateFinal(newResults)
      : console.log("invalid");
  };

  const updateEights = (newResults) => {
    const newTable = produce(table, (draft) => {
      newResults.map((matchResults, index) => {
        console.log(matchResults);
        draft.playoff.eights[index].result = matchResults;
      });

      //update quarters with eights results
      //MATCH 1
      draft.playoff.quarters[0].team1 = newResults[0].winner;
      draft.playoff.quarters[0].team2 = newResults[1].winner;

      // //MATCH 2
      draft.playoff.quarters[1].team1 = newResults[2].winner;
      draft.playoff.quarters[1].team2 = newResults[3].winner;

      // //MATCH 3
      draft.playoff.quarters[2].team1 = newResults[4].winner;
      draft.playoff.quarters[2].team2 = newResults[5].winner;

      // //MATCH 4
      draft.playoff.quarters[3].team1 = newResults[6].winner;
      draft.playoff.quarters[3].team2 = newResults[7].winner;

      draft.current_round += 1;
    });
    setTable(newTable);
  };

  const updateQuarters = (newResults) => {
    const newTable = produce(table, (draft) => {
      newResults.map((matchResults, index) => {
        console.log(matchResults);
        draft.playoff.quarters[index].result = matchResults;
      });

      //update semis with eights results
      //MATCH 1
      draft.playoff.semis[0].team1 = newResults[0].winner;
      draft.playoff.semis[0].team2 = newResults[1].winner;

      // //MATCH 2
      draft.playoff.semis[1].team1 = newResults[2].winner;
      draft.playoff.semis[1].team2 = newResults[3].winner;

      draft.current_round += 1;
    });
    setTable(newTable);
  };

  const updateSemis = (newResults) => {
    const newTable = produce(table, (draft) => {
      newResults.map((matchResults, index) => {
        console.log(matchResults);
        draft.playoff.semis[index].result = matchResults;
      });

      //update final with eights results
      //MATCH 1
      draft.playoff.final.team1 = newResults[0].winner;
      draft.playoff.final.team2 = newResults[1].winner;

      draft.current_round += 1;
    });
    setTable(newTable);
  };

  const updateFinal = (newResults) => {
    console.log(newResults);
    const newTable = produce(table, (draft) => {
      draft.playoff.final.result = newResults[0];

      draft.current_round += 1;
    });
    setTable(newTable);
  };

  return (
    <div>
      <div>
        <h2>Eights</h2>
        <button onClick={() => simulatRound([...table.playoff.eights])}>
          Sim Eights
        </button>
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
        <button onClick={() => simulatRound([...table.playoff.quarters])}>
          Sim quarters
        </button>
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
        <button onClick={() => simulatRound([...table.playoff.semis])}>
          Sim semis
        </button>
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
        <button onClick={() => simulatRound([{ ...table.playoff.final }])}>
          Sim final
        </button>
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
        {table.current_round === 5
          ? table.playoff.final.result.winner.Name
          : "Undefined"}
      </div>
    </div>
  );
};
