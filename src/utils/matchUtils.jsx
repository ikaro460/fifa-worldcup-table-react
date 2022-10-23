export const simulateMatch = (team1, team2, currentRound) => {
  const scoreTeam1 = Math.floor(Math.random() * 6);
  const scoreTeam2 = Math.floor(Math.random() * 6);

  const winner =
    scoreTeam1 > scoreTeam2
      ? team1
      : scoreTeam2 > scoreTeam1
      ? team2
      : currentRound > 0
      ? Math.floor(Math.random() * 2) === 0
        ? team1
        : team2
      : null;

  const loser = winner === null ? null : winner === team1 ? team2 : team1;

  const matchResults = {
    team_1: team1,
    team_2: team2,
    scoreTeam1: scoreTeam1,
    scoreTeam2: scoreTeam2,
    winner: winner,
    loser: loser,
  };

  return matchResults;
};
