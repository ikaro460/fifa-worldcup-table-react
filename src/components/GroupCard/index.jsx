import { DataGrid } from "@mui/x-data-grid";
import { sortPosition } from "../../utils/groupUtils";

export const GroupCard = ({ group }) => {
  const auxArr = [...group.teams];

  const sortedArr = sortPosition(auxArr);

  const rows = [];

  sortedArr.map((element, index) => {
    return rows.push({
      ...element.team_stats,
      Name: element.Name,
      id: index + 1,
    });
  });

  const columns = [
    { field: "id", headerName: "Pos", type: "number", width: 10 },
    { field: "Name", headerName: "Team", width: 200 },
    { field: "Wins", headerName: "W", type: "number", flex: 1 },
    { field: "Losses", headerName: "L", type: "number", flex: 1 },
    { field: "Draws", headerName: "D", type: "number", flex: 1 },
    { field: "GF", headerName: "GF", type: "number", flex: 1 },
    { field: "GA", headerName: "GA", type: "number", flex: 1 },
    { field: "GD", headerName: "GD", type: "number", flex: 1 },
    { field: "Points", headerName: "Points", type: "number", flex: 1 },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        rowHeight={25}
        autoHeight
        disableColumnMenu
        DataGrid
      />
    </div>
  );
};
