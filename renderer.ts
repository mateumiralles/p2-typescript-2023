import { Scorer } from "./scorers.js";

const headHtml = (title: String, style: String) => {
  return `
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="${style}.css">
    </head>
    `;
};

export const renderListPage = (scorers: Array<Scorer>) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    ${headHtml("Europe Top Scorers", 'stylesList')}
    
    <body>
    <h1> Europe's Top Scorers </h1>
     <div class='heading'> <span>RANK</span> <span>PLAYER</span> <span>GOALS</span> </div>
     <div> ${renderList(scorers)} </div>
    </body>
    </html>
    `;
};

const renderList = (scorers: Array<Scorer>) => {
  let htmlListItem = "";
  let i = 1;
  for (const scorer of scorers) {
    htmlListItem += `<a href='scorers/${scorer.joinedName}.html'> <div> <div>#${i}</div> <div class='item-col'> <span class='item-name'>${scorer.name}</span> <span class='item-team'>${scorer.team}</span></div>   <span class='item-goals'>${scorer.goals}</span> </div> </a>`;
    i++;
  }

  return `${htmlListItem}`;
};

export const renderDetailPage = (scorer: Scorer) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    ${headHtml(`${scorer.name} - Details`, '')}
    </head>
    <body>
      <h1> ${scorer.name}</h1>
    </body>
    </html>
    `;
};
