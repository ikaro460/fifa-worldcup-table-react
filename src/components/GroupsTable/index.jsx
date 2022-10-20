import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../contexts/tableProvider";
import { api } from "../../services/api";
import { GroupsComponent } from "../GroupsComponent";
import { alphabet } from "../../utils/groupUtils";

export const GroupsTable = () => {
  const { table, setTable } = useContext(TableContext);
  const [mounted, setMounted] = useState(false);

  const getTeamsFromApi = () => {
    api
      .get("", {
        headers: {
          "git-user": "ikaro460",
        },
      })
      .then((res) => {
        if (res.data.Result !== undefined) {
          addPropsOnTeams(res.data.Result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPropsOnTeams = (teams) => {
    const teamStats = {
      Wins: 0,
      Draws: 0,
      Losses: 0,
      Points: 0,
      GF: 0,
      GA: 0,
      GD: 0,
    };
    teams.map((team) => {
      return (team.team_stats = teamStats);
    });
    sortTeams(teams);
  };

  const sortTeams = (teams) => {
    const teamsSorted = teams.length
      ? teams.sort(() => (Math.random() > 0.5 ? 1 : -1))
      : [];
    separateGroups(teamsSorted, 8);
  };

  const separateGroups = (arr, numGroups) => {
    const perGroup = Math.ceil(arr.length / numGroups);
    const separatedTeams = new Array(numGroups)
      .fill("")
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));

    mountGroups(separatedTeams);
  };

  const mountGroups = (separatedTeams) => {
    separatedTeams.map((group, index) => {
      return (separatedTeams[index] = {
        group_id: alphabet[index],
        teams: group,
      });
    });

    setTable({ ...table, groups: separatedTeams });
  };

  const advanceRound = () => {
    return setTable({ ...table, current_round: table.current_round + 1 });
  };

  useEffect(() => {
    if (!mounted) {
      getTeamsFromApi();
      setMounted(true);
    }
  }, [table, setTable]);

  return (
    <div>
      <h1>Groups stage</h1>
      <GroupsComponent />
    </div>
  );
};
