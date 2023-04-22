import { writeFile } from "fs/promises";
import { loadScorers } from "./scorers.js";
import { renderListPage } from "./renderer.js";

var a = await loadScorers(50);
console.log(a[49]);
const htmlList = renderListPage(a)

await writeFile('usersList.html', htmlList);



