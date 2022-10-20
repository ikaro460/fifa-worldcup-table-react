import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { GroupCard } from "../GroupCard";

export const GroupsComponent = () => {
  const { table } = useContext(TableContext);

  return (
    <div>
      {Object.entries(table.groups).map(([key, value]) => {
        return (
          <div key={key}>
            <h1>Group {key.toUpperCase()}</h1>
            <GroupCard group={value} />
          </div>
        );
      })}
    </div>
  );
};
