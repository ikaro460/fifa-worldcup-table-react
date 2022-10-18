import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { getTeamsFromApi } from "../../utils/groupUtils";

export const GroupsTable = () => {
  const { table, setTable } = useContext(TableContext);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    getTeamsFromApi(table, setTable);
  }, [sorted]);

  return (
    <div>
      <h1>Groups stage</h1>
    </div>
  );
};
