import type { IComercio } from "../interface/IComercio.js"



function objectToJSON(comercioObject : any) {
    let comercio : IComercio = {
        id_comrc : null,
        nome : null,
        endereco : null,
        telefone : null,
        latitude : null,
        longitude : null,
        geometria : null
    }

    Object.keys(comercioObject).forEach((key: any) => {
        if (key in comercio) {
            comercio[key as keyof IComercio] = comercioObject[key as keyof IComercio]
        }
    })

    return comercio
}

function JSONToObject(comercioJSON : any) {
    let comercio : IComercio = {
        id_comrc : null,
        nome : null,
        endereco : null,
        telefone : null,
        latitude : null,
        longitude : null,
        geometria : null
    }

    Object.keys(comercioJSON).forEach((key: any) => {
        if (key in comercio) {
            comercio[key as keyof IComercio] = comercioJSON[key as keyof IComercio]
        }
    })

    return comercio
}



export {
    objectToJSON,
    JSONToObject
}