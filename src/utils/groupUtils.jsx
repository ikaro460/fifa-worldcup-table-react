export const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const matchMaking = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
];

export const sortPosition = (arr) => {
  const sortedArr = arr.sort((a, b) => {
    if (b.team_stats.Points === a.team_stats.Points) {
      if (b.team_stats.GD === a.team_stats.GD) {
        //RANDOM
        return Math.floor(Math.random() * (2 - -1) + -1);
      }
      //GD
      return b.team_stats.GD - a.team_stats.GD;
    }
    //POINTS
    return b.team_stats.Points - a.team_stats.Points;
  });

  return sortedArr;
};
