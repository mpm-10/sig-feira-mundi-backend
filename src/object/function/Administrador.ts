import type { IAdministrador } from "../interface/IAdministrador.js"



function objectToJSON(administradorObject : IAdministrador) {
    let administrador : IAdministrador = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        token_acesso : null,
        nivel_acesso : null,
        area : null,
        ultima_atividade : null
    }

    for(let key in administradorObject){
        if (key in administrador){
            (administrador as any)[key as keyof IAdministrador] = administradorObject[key as keyof IAdministrador]
        }
    }

    return administrador
}

function JSONToObject(administradorJSON : any) {
    let administrador : IAdministrador = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        token_acesso : null,
        nivel_acesso : null,
        area : null,
        ultima_atividade : null
    }

    for(let key in administradorJSON){
        if (key in administrador){
            (administrador as any)[key as keyof IAdministrador] = administradorJSON[key as keyof IAdministrador]
        }
    }

    return administrador
}



export {
    objectToJSON,
    JSONToObject
}