fetch(`https://api.football-data.org/v4/competitions/PL/scorers/?limit=50`, {
  headers: {
    method: "GET",
    "X-Auth-Token": "2594dcaf6afd43fd88946f67658232e6",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
