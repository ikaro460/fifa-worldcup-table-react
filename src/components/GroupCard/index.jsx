export const GroupCard = ({ group }) => {
  console.log(group);
  return group.teams.map((team, index) => {
    return <li key={index}>{team.Name}</li>;
  });
};
