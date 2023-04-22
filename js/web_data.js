import fetchMultiple from "./main.js";
import { secciones_rutas, seccion_rutas_web } from "./arraySection.js";

fetchMultiple(secciones_rutas("web"))
fetchMultiple(seccion_rutas_web())