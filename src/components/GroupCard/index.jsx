import { GroupTeamCard } from "../GroupTeamCard";

export const GroupCard = ({ group }) => {
  const auxArr = [...group.teams];

  const sortedArr = auxArr.sort((a, b) => {
    return b.team_stats.Points - a.team_stats.Points;
  });
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
        {sortedArr.map((team, index) => {
          return <GroupTeamCard team={team} key={index} index={index} />;
        })}
      </tbody>
    </table>
  );
};
