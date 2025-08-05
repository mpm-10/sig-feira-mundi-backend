import type { IResolucaoChamado } from "../interface/IResolucaoChamado.js"



function objectToJSON(resolucaoChamadoObject : any) {
    let resolucaoChamado : IResolucaoChamado = {
        id_usuario : null,
        id_chamado : null,
        status : null,
        prioridade : null
    }

    Object.keys(resolucaoChamadoObject).forEach((key: any) => {
        if (key in resolucaoChamado) {
            resolucaoChamado[key as keyof IResolucaoChamado] = resolucaoChamadoObject[key as keyof IResolucaoChamado]
        }
    });

    return resolucaoChamado
}

function JSONToObject(resolucaoChamadoJSON : any) {
    let resolucaoChamado : IResolucaoChamado = {
        id_usuario : null,
        id_chamado : null,
        status : null,
        prioridade : null
    }

    Object.keys(resolucaoChamadoJSON).forEach((key: any) => {
        if (key in resolucaoChamado) {
            resolucaoChamado[key as keyof IResolucaoChamado] = resolucaoChamadoJSON[key as keyof IResolucaoChamado]
        }
    });

    return resolucaoChamado
}



export {
    objectToJSON,
    JSONToObject
}