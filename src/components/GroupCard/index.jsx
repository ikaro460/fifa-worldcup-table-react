import { GroupTeamCard } from "../GroupTeamCard";

export const GroupCard = ({ group }) => {
  return group.teams.map((team, index) => {
    return (
      <li key={index}>
        <GroupTeamCard team={team} />
      </li>
    );
  });
};
