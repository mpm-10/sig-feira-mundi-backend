import type { IPromocao } from "../interface/IPromocao.js"



function objectToJSON(promocaoObject : IPromocao) {
    let promocao : IPromocao = {
        id_promocao : null,
        porcentagem_desconto : null,
        data_inicio : null,
        hora_inicio : null,
        data_fim : null,
        hora_fim : null
    }

    for(let key in promocaoObject){
        if (key in promocao){
            (promocao as any)[key as keyof IPromocao] = promocaoObject[key as keyof IPromocao]
        }
    }

    return promocao
}

function JSONToObject(promocaoJSON : IPromocao) {
    let promocao : IPromocao = {
        id_promocao : null,
        porcentagem_desconto : null,
        data_inicio : null,
        hora_inicio : null,
        data_fim : null,
        hora_fim : null
    }

    for(let key in promocaoJSON){
        if (key in promocao){
            (promocao as any)[key as keyof IPromocao] = promocaoJSON[key as keyof IPromocao]
        }
    }

    return promocao
}



export {
    objectToJSON,
    JSONToObject
}