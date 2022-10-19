import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { GroupCard } from "../GroupCard";

export const GroupsComponent = () => {
  const { table } = useContext(TableContext);

  return (
    <ul>
      {table.groups.map((group, index) => {
        return (
          <li key={index}>
            <ul>
              <h1>Group {group.group_id}</h1>
              <GroupCard group={group} />
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
