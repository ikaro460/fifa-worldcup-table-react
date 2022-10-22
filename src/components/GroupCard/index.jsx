import { DataGrid } from "@mui/x-data-grid";

export const GroupCard = ({ group }) => {
  const auxArr = [...group.teams];

  const sortedArr = auxArr.sort((a, b) => {
    return b.team_stats.Points - a.team_stats.Points;
  });

  const rows = [];

  sortedArr.map((element, index) => {
    return rows.push({
      ...element.team_stats,
      Name: element.Name,
      id: index + 1,
    });
  });

  console.log(sortedArr, rows);

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
    // <table>
    //   <thead>
    //     <tr>
    //       <th>*</th>
    //       <th>Team</th>
    //       <th>W</th>
    //       <th>L</th>
    //       <th>D</th>
    //       <th>Pts</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {sortedArr.map((team, index) => {
    //       return <GroupTeamCard team={team} key={index} index={index} />;
    //     })}
    //   </tbody>
    // </table>
  );
};
