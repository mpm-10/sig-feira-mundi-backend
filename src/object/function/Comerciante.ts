import type { IComerciante } from "../interface/IComerciante.js"



function objectToJSON(comercianteObject : any) {
    let usuario : any = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null
    }

    let comerciante : any = {
        id_usuario : null,
        telefone_comercial : null
    }

    Object.keys(comercianteObject).forEach((key: any) => {
        if (key in usuario) {
            usuario[key as keyof IComerciante] = comercianteObject[key as keyof IComerciante]
        }
        if (key in comerciante) {
            comerciante[key as keyof IComerciante] = comercianteObject[key as keyof IComerciante]
        }
    });
    
    return [usuario, comerciante]
}

function JSONToObject(comercianteJSON : any) {
    let comerciante : IComerciante = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        telefone_comercial : null
    }

    const usuarioRegister = comercianteJSON[0]
    const comercianteRegister = comercianteJSON[1]

    Object.keys(comerciante).forEach((key: any) => {
        if (key in usuarioRegister) {
            comerciante[key as keyof IComerciante] = usuarioRegister[key as keyof IComerciante]
        }
        if (key in comercianteRegister) {
            comerciante[key as keyof IComerciante] = comercianteRegister[key as keyof IComerciante]
        }
    });

    return comerciante
}



export {
    objectToJSON,
    JSONToObject
}