import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { GroupCard } from "../GroupCard";

export const GroupsComponent = () => {
  const { table } = useContext(TableContext);

  return (
    <div>
      {table.groups.map((group, index) => {
        return (
          <div key={index}>
            <h1>Group {group.group_id}</h1>
            <GroupCard group={group} />
          </div>
        );
      })}
    </div>
  );
};
