let createElementH1 = (texto, StyleH1 = "w-full rounded-md py-2 text-center font-semibold text-2xl") => {
    let elementCreate = document.createElement("h1")
    elementCreate.classList = StyleH1
    elementCreate.textContent = texto
    return elementCreate
}
function disco(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0) {
            let createRow = document.createElement("div")
            createRow.classList = "w-full h-32 flex-wrap rounded-md flex flex-col justify-evenly items-center font-semibold text-sm bg-[#222] p-2"
            let column = line.split('\t')
            createRow.appendChild(createElementH1(column[0], "font-semibold text-xs"))
            boxIP.appendChild(createRow)
        }
    })
}
function ipAsignadas(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line != 'The' && line != 'This' && line.length != 0){
            boxIP.appendChild(createElementH1(line, "w-full rounded-md bg-[#222] py-2 text-center font-semibold"))
        }
    })
}
function ip(boxIP, contenido){
    let contenidoLine = contenido.split(' ')
    contenidoLine.map((line) => {
        if(line != '192.168.0.1' && line != '192.168.240.128' && line.length > 2){
            boxIP.appendChild(createElementH1(line, "w-full rounded-md py-2 text-center font-semibold text-2xl"))
        }
    })
}
function memoria(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    let sinTabMemoria = contenidoLine[1].split('     ')
    let sinTabSwap = contenidoLine[2].split('      ')
    creacionGrafica(
        ['used','free','shared','cache'],
        [sinTabMemoria[2], sinTabMemoria[3], sinTabMemoria[4], sinTabMemoria[5]], 
        'myChart',
        ['#3C486B','#E4DCCF','#F9D949', '#F45050']);
    creacionGrafica(
        ['used','free','shared'],
        [sinTabSwap[2].length != 0 ? sinTabSwap[2] : 0, sinTabSwap[3], sinTabSwap[4]], 
        'myChartSwap',
        ['#3C486B','#E4DCCF','#F9D949', '#F45050']);
}
function zonas(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0){
            boxIP.appendChild(createElementH1(line, "w-full rounded-md bg-[#222] py-2 text-center font-semibold"))
        }
    })
}
function traducciones(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0 && line != "@\r"){
            boxIP.appendChild(createElementH1(line, "w-full rounded-md bg-[#222] py-2 text-center font-semibold"))
        }
    })
}
function enrutamiento(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0) {
            let createRow = document.createElement("div")
            createRow.classList = "w-full h-32 flex-wrap rounded-md flex flex-col justify-evenly items-center font-semibold text-sm bg-[#222]"
            let column = line.split('\t')
            createRow.appendChild(createElementH1(column[0], "font-semibold text-xs"))
            boxIP.appendChild(createRow)
        }
    })
}
function puertos(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0) {
            let createRow = document.createElement("div")
            createRow.classList = "w-full h-32 flex-wrap rounded-md flex flex-col justify-evenly items-center font-semibold text-sm bg-[#222] p-2"
            let column = line.split('\t')
            createRow.appendChild(createElementH1(column[0], "font-semibold text-xs"))
            boxIP.appendChild(createRow)
        }
    })
}
function sitios(boxIP, contenido){
    let contenidoLine = contenido.split('\n')
    contenidoLine.map((line) => {
        if(line.length != 0) {
            let createRow = document.createElement("div")
            createRow.classList = "w-full h-32 flex-wrap rounded-md flex flex-col justify-evenly items-center font-semibold text-sm bg-[#222] p-2"
            let column = line.split('\t')
            createRow.appendChild(createElementH1(column[0], "font-semibold text-xs"))
            createRow.appendChild(createElementH1(column[1], "font-semibold text-xs"))
            boxIP.appendChild(createRow)
        }
    })
}

function creacionGrafica(valores, datos, grafica, colores){
    const ctx = document.getElementById(grafica);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: valores,
            datasets: [{
              label: '',
              data: datos,
              backgroundColor: colores,
              hoverOffset: 4
            }]
          }
    });
}

export  {disco, ipAsignadas, ip, memoria, zonas, enrutamiento, puertos, sitios, traducciones}