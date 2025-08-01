import type { IChamado } from "../interface/IChamado.js"



function objectToJSON(chamadoObject : IChamado) {
    let chamado : IChamado = {
        id_chamado : null,
        categoria : null,
        descricao : null,
        data_chamado : null,
        hora_chamado : null
    }

    for(let key in chamadoObject){
        if (key in chamado){
            (chamado as any)[key as keyof IChamado] = chamadoObject[key as keyof IChamado]
        }
    }

    return chamado
}

function JSONToObject(chamadoJSON : IChamado) {
    let chamado : IChamado = {
        id_chamado : null,
        categoria : null,
        descricao : null,
        data_chamado : null,
        hora_chamado : null
    }

    for(let key in chamadoJSON){
        if (key in chamado){
            (chamado as any)[key as keyof IChamado] = chamadoJSON[key as keyof IChamado]
        }
    }

    return chamado
}



export {
    objectToJSON,
    JSONToObject
}