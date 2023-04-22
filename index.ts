import { loadScorers } from "./scorers.js";

var a = await loadScorers(50);
console.log(a[49]);
