import type { IAdministrador } from "../interface/IAdministrador.js"



function objectToJSON(administradorObject : any) {
    let usuario : any = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null
    }

    let administrador : any = {
        id_usuario : null,
        token_acesso : null,
        nivel_acesso : null,
        area : null,
        ultima_atividade : null
    }

    Object.keys(administradorObject).forEach((key: any) => {
        if (key in usuario) {
            usuario[key as keyof IAdministrador] = administradorObject[key as keyof IAdministrador]
        }
        if (key in administrador) {
            administrador[key as keyof IAdministrador] = administradorObject[key as keyof IAdministrador]
        }
    });
    
    return [usuario, administrador]
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

    const usuarioRegister = administradorJSON[0]
    const administradorRegister = administradorJSON[1]

    Object.keys(administrador).forEach((key: any) => {
        if (key in usuarioRegister) {
            administrador[key as keyof IAdministrador] = usuarioRegister[key as keyof IAdministrador]
        }
        if (key in administradorRegister) {
            administrador[key as keyof IAdministrador] = administradorRegister[key as keyof IAdministrador]
        }
    });

    return administrador
}



export {
    objectToJSON,
    JSONToObject
}