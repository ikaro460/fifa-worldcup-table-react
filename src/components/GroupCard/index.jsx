import { GroupTeamCard } from "../GroupTeamCard";

export const GroupCard = ({ group }) => {
  return (
    <table>
      <tr>
        <th>*</th>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>D</th>
        <th>Pts</th>
      </tr>
      {group.teams.map((team, index) => {
        return <GroupTeamCard team={team} index={index} />;
      })}
    </table>
  );
};
