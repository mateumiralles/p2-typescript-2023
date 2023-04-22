export class Scorer {
    name: String;
    team: String;
    nationality: String;
    position: String;
  
    playedMatches: Number;
    goals: Number;
    assists: Number;
    penalties: Number;
  
    dateOfBirth?: Date;
  
    constructor(
      name: String,
      team: String,
      nationality: String,
      position: String,
      playedMatches: Number,
      goals: Number,
      assists: Number,
      penalties: Number
    ) {
      this.name = name;
      this.nationality = nationality;
      this.team = team;
      this.position = position;
  
      this.playedMatches = playedMatches;
      this.goals = goals;
      this.assists = assists;
      this.penalties = penalties;
    }
  }
  
  export const loadScorers = async (n: number) => {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/PL/scorers/?limit=${n}`,
      {
        headers: {
          method: "GET",
          "X-Auth-Token": "2594dcaf6afd43fd88946f67658232e6",
        },
      }
    );
  
    const { scorers } = (await response.json()) as { scorers: any[] };
  
    const scorersList: Array<Scorer> = [];
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
          penalties
        )
      );
    }
  
    return scorersList;
  };