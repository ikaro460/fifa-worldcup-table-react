import { useContext } from "react";
import { TableContext } from "../contexts/tableProvider";
import { api } from "../services/api";

export const getTeamsFromApi = (table, setTable) => {
  console.log(table);
  return api
    .get("", {
      headers: {
        "git-user": "ikaro460",
      },
    })
    .then((res) => {
      console.log(res);
      if (res.data.Result !== undefined) {
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

  console.log(separatedTeams);
  mountGroups(table, setTable, separatedTeams);
};

export const mountGroups = (table, setTable, separatedTeams) => {
  separatedTeams.map((group, index) => {
    console.log(table);

    const newGroup = { group_id: index, teams: group };
    setTable({ ...table, groups: { ...table.groups, newGroup } });
  });
};

export const advanceRound = (table, setTable) => {
  return setTable({ ...table, current_round: table.current_round + 1 });
};
