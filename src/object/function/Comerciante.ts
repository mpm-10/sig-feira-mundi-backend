import type { IComerciante } from "../interface/IComerciante.js"



function objectToJSON(comercianteObject : IComerciante) {
    let comerciante : IComerciante = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        telefone_comercial : null
    }

    for(let key in comercianteObject){
        if (key in comerciante){
            (comerciante as any)[key as keyof IComerciante] = comercianteObject[key as keyof IComerciante]
        }
    }

    return comerciante
}

function JSONToObject(comercianteJSON : IComerciante) {
    let comerciante : IComerciante = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        telefone_comercial : null
    }

    for(let key in comercianteJSON){
        if (key in comerciante){
            (comerciante as any)[key as keyof IComerciante] = comercianteJSON[key as keyof IComerciante]
        }
    }

    return comerciante
}



export {
    objectToJSON,
    JSONToObject
}