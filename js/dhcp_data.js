import fetchMultiple from "./main.js";
import { secciones_rutas, secciones_rutas_dhcp } from "./arraySection.js";

fetchMultiple(secciones_rutas("dhcp"))
fetchMultiple(secciones_rutas_dhcp())