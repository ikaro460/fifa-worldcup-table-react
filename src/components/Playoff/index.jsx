import produce from "immer";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { sortPosition } from "../../utils/groupUtils";
import { sortEigths } from "../../utils/playoffUtils";

export const Playoff = () => {
  const { table, setTable } = useContext(TableContext);
  const [mounted, setMounted] = useState(false);

  const mountPlayoffBracket = () => {
    const auxArr = [];

    [...table.groups].forEach((element) => {
      const classifiedArr = sortPosition([...element.teams]);
      auxArr.push({
        team1: classifiedArr[0],
        team2: classifiedArr[1],
        result: {},
      });
    });

    const sortedEights = sortEigths(auxArr);

    const tableEights = produce(table, (draft) => {
      draft.playoff.eights = sortedEights;
    });

    console.log(tableEights);

    setTable(tableEights);
  };

  useEffect(() => {
    if (table.current_round === 1 && !mounted) {
      mountPlayoffBracket();
      setMounted(true);
    }
  }, [table, setTable]);
};
