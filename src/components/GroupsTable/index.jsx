import { useContext, useEffect } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { getTeamsFromApi } from "../../utils/groupUtils";
import { GroupsComponent } from "../Groups";

export const GroupsTable = ({ group }) => {
  const { table, setTable } = useContext(TableContext);

  useEffect(() => {
    getTeamsFromApi(table, setTable);
    console.log("oi");
  }, []);

  return (
    <div>
      <h1>Groups stage</h1>
      <GroupsComponent />
    </div>
  );
};
