import axios from "axios";

export const api = axios.create({
  baseURL: "https://estagio.geopostenergy.com/WorldCup/GetAllTeams",
});
