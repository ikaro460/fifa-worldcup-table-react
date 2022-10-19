export const GroupTeamCard = ({ team, index }) => {
  return (
    <tr>
      <span>{index + 1}</span>
      <td>{team.Name}</td>
      <td>{team.team_stats.Wins}</td>
      <td>{team.team_stats.Losses}</td>
      <td>{team.team_stats.Draws}</td>
      <td>{team.team_stats.Points}</td>
    </tr>
  );
};
