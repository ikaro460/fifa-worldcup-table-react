export const advanceRound = (table, setTable) => {
  return setTable({ ...table, current_round: table.current_round + 1 });
};
