export const GroupTeamCard = ({ team }) => {
  return (
    <ul>
      <h2>{team.Name}</h2>
      <li>Wins: {team.team_stats.Wins}</li>
      <li>Draws: {team.team_stats.Draws}</li>
      <li>Losses: {team.team_stats.Losses}</li>
      <li>Points: {team.team_stats.Points}</li>
    </ul>
  );
};
