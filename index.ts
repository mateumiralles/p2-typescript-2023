import { writeFile } from "fs/promises";
import { loadScorers } from "./scorers.js";
import { renderDetailPage, renderListPage } from "./renderer.js";

var scorersList = await loadScorers(15);

const htmlList = renderListPage(scorersList);

for (const scorer of scorersList) {
  const htmlDetail = renderDetailPage(scorer);
  await writeFile(`scorers/${scorer.joinedName}.html`, htmlDetail);
}

await writeFile("scorersList.html", htmlList);
