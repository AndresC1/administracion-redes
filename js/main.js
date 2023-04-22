function fetchMultiple(section){
    return Promise.all(section.map( archivo => {
        const boxIP = document.getElementById(archivo[1])
        fetch(archivo[0]).then(response => {
            if(!response.ok){
                throw new Error(response.message)
            }
            return response.text()
        }).then( contenido => {
            if(contenido.length == 0){
                return boxIP.appendChild(createElementH1('Listado vacio'))
            }
            archivo[2].forEach(action => action(boxIP, contenido))
        })
    })).catch(function(error) {
        alert(error);
    });
}

export default fetchMultiple


