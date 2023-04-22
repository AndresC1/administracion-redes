import {  memoria, disco, ip, ipAsignadas, enrutamiento, zonas, sitios, puertos } from "./secciones.js"

function secciones_rutas(ruta){
    const secciones = [
        [
            `./archivos/${ruta}/disco.txt`,
            "disco",
            [function(boxIP, contenido){ disco(boxIP, contenido) }]
        ],
        [
            `./archivos/${ruta}/ip.txt`,
            "ip",
            [function(boxIP, contenido){ ip(boxIP, contenido) }]
        ],
        [
            `./archivos/${ruta}/memoria.txt`,
            "memoria",
            [function(boxIP, contenido){ memoria(boxIP, contenido) }]
        ],
        [
            `./archivos/${ruta}/enrutamiento.txt`,
            "enrutamiento",
            [function(boxIP, contenido){ enrutamiento(boxIP, contenido) }]
        ],
        [
            `./archivos/${ruta}/udp_tcp.txt`,
            "puertos",
            [function(boxIP, contenido){ puertos(boxIP, contenido) }]
        ],
    ]
    return secciones
}

function secciones_rutas_dhcp(){
    const seccion_dhcp = [
        [
            "./archivos/dhcp/IP_asignadas.txt",
            "ip_asignadas",
            [function(boxIP, contenido){ ipAsignadas(boxIP, contenido) }]
        ],
    ]
    return seccion_dhcp
}

function seccion_rutas_dns(){
    const seccion_dns = [
        [
            "./archivos/dns/zonas.txt",
            "zonas",
            [function(boxIP, contenido){ zonas(boxIP, contenido) }]
        ],
    ]
    return seccion_dns
}

function seccion_rutas_web(){
    const seccion_web = [
        [
            "./archivos/web/host_virtuales.txt",
            "sitios_virtuales",
            [function(boxIP, contenido){ sitios(boxIP, contenido) }]
        ],
    ]
    return seccion_web
}

export {secciones_rutas, seccion_rutas_web, secciones_rutas_dhcp, seccion_rutas_dns};