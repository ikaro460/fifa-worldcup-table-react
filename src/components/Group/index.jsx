import { useContext } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { alphabet } from "../../utils/groupUtils";
import { GroupCard } from "../GroupCard";
import { StyledContainer } from "./styles";

export const Group = () => {
  const { table } = useContext(TableContext);

  return (
    <div>
      <StyledContainer>
        {table.groups.map((group, index) => {
          return (
            <div key={index}>
              <h2>Group {alphabet[index].toUpperCase()}</h2>
              <GroupCard group={group} />
            </div>
          );
        })}
      </StyledContainer>
    </div>
  );
};
