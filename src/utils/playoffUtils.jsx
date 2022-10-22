export const generateEmptyPlayoff = () => {
  const emptyEights = [];
  const teamObj = {
    Name: "Undefined",
    Score: "",
  };

  for (let i = 0; i < 8; i++) {
    emptyEights.push({ team1: teamObj, team2: teamObj, result: {} });
  }

  const emptyQuarters = [];

  for (let i = 0; i < 4; i++) {
    emptyQuarters.push({ team1: teamObj, team2: teamObj, result: {} });
  }

  const emptySemis = [];

  for (let i = 0; i < 2; i++) {
    emptySemis.push({ team1: teamObj, team2: teamObj, result: {} });
  }

  const emptyFinal = { team1: teamObj, team2: teamObj, result: {} };

  const obj = {
    eights: emptyEights,
    quarters: emptyQuarters,
    semis: emptySemis,
    final: emptyFinal,
  };

  return obj;
};

export const sortEigths = (auxArr) => {
  return [
    { team1: auxArr[0].team1, team2: auxArr[1].team2, result: {} },
    { team1: auxArr[2].team1, team2: auxArr[3].team2, result: {} },
    { team1: auxArr[4].team1, team2: auxArr[5].team2, result: {} },
    { team1: auxArr[6].team1, team2: auxArr[7].team2, result: {} },

    { team1: auxArr[1].team1, team2: auxArr[0].team2, result: {} },
    { team1: auxArr[3].team1, team2: auxArr[2].team2, result: {} },
    { team1: auxArr[5].team1, team2: auxArr[4].team2, result: {} },
    { team1: auxArr[7].team1, team2: auxArr[6].team2, result: {} },
  ];
};
