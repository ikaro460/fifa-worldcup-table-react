import { api } from "../services/api";

//convert index number to letter array
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const getTeamsFromApi = (table, setTable) => {
  return api
    .get("", {
      headers: {
        "git-user": "ikaro460",
      },
    })
    .then((res) => {
      if (res.data.Result !== undefined) {
        console.log(res);
        sortTeams(table, setTable, res.data.Result);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sortTeams = (table, setTable, teams) => {
  const teamsSorted = teams.length
    ? teams.sort(() => (Math.random() > 0.5 ? 1 : -1))
    : [];
  separateGroups(teamsSorted, 8, table, setTable);
};

export const separateGroups = (arr, numGroups, table, setTable) => {
  const perGroup = Math.ceil(arr.length / numGroups);
  const separatedTeams = new Array(numGroups)
    .fill("")
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));

  mountGroups(table, setTable, separatedTeams);
};

export const mountGroups = (table, setTable, separatedTeams) => {
  separatedTeams.map((group, index) => {
    return (separatedTeams[index] = {
      group_id: alphabet[index],
      teams: group,
    });
  });
  setTable({ ...table, groups: separatedTeams });
};

export const advanceRound = (table, setTable) => {
  return setTable({ ...table, current_round: table.current_round + 1 });
};
