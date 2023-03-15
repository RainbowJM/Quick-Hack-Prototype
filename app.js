import { fetchData } from "./modules/api.js";
import { onRouteChanged } from "./modules/router.js"

fetchData();

window.addEventListener("hashchange", onRouteChanged);