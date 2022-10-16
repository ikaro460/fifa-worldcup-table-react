import { api } from "../services/api";

export const getTeamsFromApi = (table, setTable) => {
  return api
    .get("", {
      headers: {
        "git-user": "ikaro460",
      },
    })
    .then((res) => {
      setTable({ ...table, teams: res.data.Result });
    })
    .catch((err) => {
      console.log(err);
    });
};
