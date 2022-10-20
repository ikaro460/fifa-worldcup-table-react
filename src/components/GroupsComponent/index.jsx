import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { alphabet } from "../../utils/groupUtils";
import { GroupCard } from "../GroupCard";

export const GroupsComponent = () => {
  const { table } = useContext(TableContext);

  return (
    <div>
      {table.groups.map((group, index) => {
        return (
          <div key={index}>
            <h1>Group {alphabet[index]}</h1>
            <GroupCard group={group} />
          </div>
        );
      })}
    </div>
  );
};
