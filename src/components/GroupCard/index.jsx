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
        {Object.entries(group.teams).map(([key, value]) => {
          return <GroupTeamCard team={value} key={key} index={key} />;
        })}
      </tbody>
    </table>
  );
};
