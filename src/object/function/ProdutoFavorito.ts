import type { IProdutoFavorito } from "../interface/IProdutoFavorito.js"



function objectToJSON(produtoFavoritoObject : any) {
    let produtoFavorito : IProdutoFavorito = {
        id_usuario : null,
        id_tipo_produto : null
    }

    Object.keys(produtoFavoritoObject).forEach((key: any) => {
        if (key in produtoFavorito) {
            produtoFavorito[key as keyof IProdutoFavorito] = produtoFavoritoObject[key as keyof IProdutoFavorito]
        }
    });

    return produtoFavorito
}

function JSONToObject(produtoFavoritoJSON : any) {
    let produtoFavorito : IProdutoFavorito = {
        id_usuario : null,
        id_tipo_produto : null
    }

    Object.keys(produtoFavoritoJSON).forEach((key: any) => {
        if (key in produtoFavorito) {
            produtoFavorito[key as keyof IProdutoFavorito] = produtoFavoritoJSON[key as keyof IProdutoFavorito]
        }
    });

    return produtoFavorito
}



export {
    objectToJSON,
    JSONToObject
}