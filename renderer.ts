import { Scorer } from "./scorers.js";

const headHtml = (title: String) => {
    return `
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    `
};

export const renderListPage = (scorers: Array<Scorer>) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${headHtml('Top Scorers List')}
    
    <body>
      ${renderList(scorers)}
    </body>
    </html>
    `  
};

 const renderList = (scorers: Array<Scorer>) => {
    let htmlListItem = '';

    for (const scorer of scorers){
        htmlListItem += `<a href='scorers/${scorer.joinedName}.html'> <li> ${scorer.name} </li> </a>`
    }

    return `<ol> ${htmlListItem} </ol>`
  
};
 

export const renderDetailPage = (scorer: Scorer) =>{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${headHtml(`${scorer.name} - Details`)}
    </head>
    <body>
      <h1> ${scorer.name}</h1>
    </body>
    </html>
    `  
}
