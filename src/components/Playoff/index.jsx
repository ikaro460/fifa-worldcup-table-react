import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { sortPosition } from "../../utils/groupUtils";

export const Playoff = () => {
  const { table, setTable } = useContext(TableContext);

  const auxArr = [];

  [...table.groups].forEach((element) => {
    const classifiedArr = sortPosition([...element.teams]);
    auxArr.push([classifiedArr[0], classifiedArr[1]]);
  });

  console.log(auxArr);
  return <div>index</div>;
};