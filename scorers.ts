export class Scorer {
  name: String;
  team: String;
  nationality: String;
  position: String;

  playedMatches: Number;
  goals: Number;
  assists: Number;
  penalties: Number;

  dateOfBirth: Date;

  public get joinedName() {
    return this.name.split(" ").join("");
  }

  constructor(
    name: String,
    team: String,
    nationality: String,
    position: String,
    playedMatches: Number,
    goals: Number,
    assists: Number,
    penalties: Number,
    dateOfBirth: Date
  ) {
    this.name = name;
    this.nationality = nationality;
    this.team = team;
    this.position = position;

    this.playedMatches = playedMatches;
    this.goals = goals;
    this.assists = assists;
    this.penalties = penalties;
    this.dateOfBirth = dateOfBirth;
  }
}

export const loadScorers = async (n: number) => {
  //Como la API no tiene un endpoint común para todos los jugadores de las grandes ligas europeas, hay que realizar un fetch para cada una de ellas
  // PL = Premiere League
  // PD = Primera Division
  // SA = Serie A
  // FL1 = Ligue 1
  // BL1 = Bundesliga

  const leaguesIDs = ["PL", "PD", "SA", "FL1", "BL1"];
  const scorersList: Array<Scorer> = [];

  for (const id of leaguesIDs) {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/${id}/scorers/?limit=${n}`,
      {
        headers: {
          method: "GET",
          "X-Auth-Token": "2594dcaf6afd43fd88946f67658232e6",
        },
      }
    );
    console.log(`${id} fetch done!`);
    const { scorers } = (await response.json()) as { scorers: any[] };

    for (const {
      player,
      team,
      goals,
      playedMatches,
      assists,
      penalties,
    } of scorers) {
      scorersList.push(
        new Scorer(
          player.name,
          team.name,
          player.nationality,
          player.position,
          playedMatches,
          goals,
          assists,
          penalties,
          new Date(player.dateOfBirth)
        )
      );
    }
  }

  //Ordenamos los jugadores de la lista por el número de goles
  //En caso de empate, se posiciona más arriba al jugador con más asistencias
  scorersList.sort((a, b) => (a.goals > b.goals) ? -1 : (a.goals === b.goals) ? ((a.assists > b.assists) ? -1 : 1) : 1 )
  return scorersList;
};
