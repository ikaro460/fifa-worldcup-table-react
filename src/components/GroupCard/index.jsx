import { DataGrid } from "@mui/x-data-grid";
import { sortByPoints } from "../../utils/groupUtils";

export const GroupCard = ({ group }) => {
  const auxArr = [...group.teams];

  const sortedArr = sortByPoints(auxArr);

  const rows = [];

  sortedArr.map((element, index) => {
    return rows.push({
      ...element.team_stats,
      Name: element.Name,
      id: index + 1,
    });
  });

  const columns = [
    { field: "id", headerName: "Pos", type: "number" },
    { field: "Name", headerName: "Team", width: "100" },
    { field: "Wins", headerName: "W", type: "number" },
    { field: "Losses", headerName: "L", type: "number" },
    { field: "Points", headerName: "Points", type: "number" },
  ];

  return (
    <div style={{ width: "55%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        rowHeight={25}
        autoHeight
        disableColumnMenu
      />
    </div>
  );
};
