import type { IComercio } from "../interface/IComercio.js"



function objectToJSON(comercioObject : IComercio) {
    let comercio : IComercio = {
        id_comercio : null,
        nome : null,
        endereco : null,
        telefone : null,
        latitude : null,
        longitude : null,
        geometria : null
    }

    for(let key in comercioObject){
        if (key in comercio){
            (comercio as any)[key as keyof IComercio] = comercioObject[key as keyof IComercio]
        }
    }

    return comercio
}

function JSONToObject(comercioJSON : IComercio) {
    let comercio : IComercio = {
        id_comercio : null,
        nome : null,
        endereco : null,
        telefone : null,
        latitude : null,
        longitude : null,
        geometria : null
    }

    for(let key in comercioJSON){
        if (key in comercio){
            (comercio as any)[key as keyof IComercio] = comercioJSON[key as keyof IComercio]
        }
    }

    return comercio
}



export {
    objectToJSON,
    JSONToObject
}