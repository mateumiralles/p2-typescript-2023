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
    ${headHtml("Europe Top Scorers", "stylesList")}
    
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
    ${headHtml(`${scorer.name} - Details`, "../stylesDetail")}
    </head>
    <body>
        <div>
            <div>
                <h1> ${scorer.name} </h1>
                <div> 
                    <span> ${scorer.nationality}</span>
                    <span> ${scorer.dateOfBirth.getUTCDate()}/${
    scorer.dateOfBirth.getUTCMonth() + 1
  }/${scorer.dateOfBirth.getUTCFullYear()} </span>
                </div>
            </div>
            <div>
                <h2> ${scorer.team}</h2>
            </div>
            <div>
                <h2> ${scorer.position}</h2>
            </div>
        </div>
        <div>
            <div>
                <span class='numt'>${scorer.playedMatches}</span>
                <span class="subt">PLAYED MATCHES</span>
            </div>
                
            <div>
                <span class='numt'>${scorer.goals}</span>
                <span class="subt">GOALS</span>
            </div>

            <div>
                <span class='numt'>${scorer.assists === null ? 0 : scorer.assists}</span>
                <span class="subt">ASSISTS</span>
            </div>

            <div>
                <span class='numt'>${scorer.penalties > 0 ? scorer.penalties : 0} </span>
                <span class="subt">PENALTIES</span>
            </div>
        </div>
    </body>
    </html>
    `;
};
const ageFromDateOfBirthday = (dateOfBirth: Date): number => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
