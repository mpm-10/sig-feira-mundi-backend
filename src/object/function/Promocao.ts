import type { IPromocao } from "../interface/IPromocao.js"



function objectToJSON(promocaoObject : any) {
    let promocao : IPromocao = {
        id_promocao : null,
        porcentagem_desconto : null,
        data_inicio : null,
        hora_inicio : null,
        data_fim : null,
        hora_fim : null
    }

    Object.keys(promocaoObject).forEach((key: any) => {
        if (key in promocao) {
            promocao[key as keyof IPromocao] = promocaoObject[key as keyof IPromocao]
        }
    })

    return promocao
}

function JSONToObject(promocaoJSON : any) {
    let promocao : IPromocao = {
        id_promocao : null,
        porcentagem_desconto : null,
        data_inicio : null,
        hora_inicio : null,
        data_fim : null,
        hora_fim : null
    }

    Object.keys(promocaoJSON).forEach((key: any) => {
        if (key in promocao) {
            promocao[key as keyof IPromocao] = promocaoJSON[key as keyof IPromocao]
        }
    })

    return promocao
}



export {
    objectToJSON,
    JSONToObject
}