import type { IComercioFavorito } from "../interface/IComercioFavorito.js"



function objectToJSON(comercioFavoritoObject : any) {
    let comercioFavorito : IComercioFavorito = {
        id_usuario : null,
        id_comrc : null
    }

    Object.keys(comercioFavoritoObject).forEach((key: any) => {
        if (key in comercioFavorito) {
            comercioFavorito[key as keyof IComercioFavorito] = comercioFavoritoObject[key as keyof IComercioFavorito]
        }
    });

    return comercioFavorito
}

function JSONToObject(comercioFavoritoJSON : any) {
    let comercioFavorito : IComercioFavorito = {
        id_usuario : null,
        id_comrc : null
    }

    Object.keys(comercioFavoritoJSON).forEach((key: any) => {
        if (key in comercioFavorito) {
            comercioFavorito[key as keyof IComercioFavorito] = comercioFavoritoJSON[key as keyof IComercioFavorito]
        }
    });

    return comercioFavorito
}



export {
    objectToJSON,
    JSONToObject
}