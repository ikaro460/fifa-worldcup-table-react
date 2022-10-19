import { GroupTeamCard } from "../GroupTeamCard";

export const GroupCard = ({ group }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>*</th>
          <th>Team</th>
          <th>W</th>
          <th>L</th>
          <th>D</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {group.teams.map((team, index) => {
          return <GroupTeamCard team={team} key={index} index={index} />;
        })}
      </tbody>
    </table>
  );
};
