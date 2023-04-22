import fetchMultiple from "./main.js";
import { secciones_rutas, seccion_rutas_dns } from "./arraySection.js";

fetchMultiple(secciones_rutas("dns"))
fetchMultiple(seccion_rutas_dns())