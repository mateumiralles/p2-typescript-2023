import { Scorer } from "./scorers.js";

export const renderListPage = (scorers: Array<Scorer>) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ${renderList(scorers)}
    </body>
    </html>
    `  
};

 const renderList = (scorers: Array<Scorer>) => {
    let htmlListItem = '';

    for (const scorer of scorers){
        htmlListItem += `<li> ${scorer.name} </li>`
    }

    return `<ol> ${htmlListItem} </ol>`
  
};
 
