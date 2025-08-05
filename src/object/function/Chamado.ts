import type { IChamado } from "../interface/IChamado.js"



function objectToJSON(chamadoObject : any) {
    let chamado : IChamado = {
        id_chamado : null,
        categoria : null,
        descricao : null,
        data_chamado : null,
        hora_chamado : null
    }

    Object.keys(chamadoObject).forEach((key: any) => {
        if (key in chamado) {
            chamado[key as keyof IChamado] = chamadoObject[key as keyof IChamado]
        }
    })

    return chamado
}

function JSONToObject(chamadoJSON : any) {
    let chamado : IChamado = {
        id_chamado : null,
        categoria : null,
        descricao : null,
        data_chamado : null,
        hora_chamado : null
    }

    Object.keys(chamadoJSON).forEach((key: any) => {
        if (key in chamado) {
            chamado[key as keyof IChamado] = chamadoJSON[key as keyof IChamado]
        }
    })

    return chamado
}



export {
    objectToJSON,
    JSONToObject
}