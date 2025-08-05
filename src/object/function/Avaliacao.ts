import type { IAvaliacao } from "../interface/IAvaliacao.js"



function objectToJSON(avaliacaoObject : any) {
    let avaliacao : IAvaliacao = {
        id_usuario : null,
        id_comrc : null,
        grau : null,
        avaliacao : null
    }

    Object.keys(avaliacaoObject).forEach((key: any) => {
        if (key in avaliacao) {
            avaliacao[key as keyof IAvaliacao] = avaliacaoObject[key as keyof IAvaliacao]
        }
    });

    return avaliacao
}

function JSONToObject(avaliacaoJSON : any) {
    let avaliacao : IAvaliacao = {
        id_usuario : null,
        id_comrc : null,
        grau : null,
        avaliacao : null
    }

    Object.keys(avaliacaoJSON).forEach((key: any) => {
        if (key in avaliacao) {
            avaliacao[key as keyof IAvaliacao] = avaliacaoJSON[key as keyof IAvaliacao]
        }
    });

    return avaliacao
}



export {
    objectToJSON,
    JSONToObject
}