import type { ITipoProduto } from "../interface/ITipoProduto.js"



function objectToJSON(tipoProdutoObject : any) {
    let tipoProduto : ITipoProduto = {
        id_tipo_produto : null,
        nome_tipo : null,
        descricao : null
    }

    Object.keys(tipoProdutoObject).forEach((key: any) => {
        if (key in tipoProduto) {
            tipoProduto[key as keyof ITipoProduto] = tipoProdutoObject[key as keyof ITipoProduto]
        }
    });

    return tipoProduto
}

function JSONToObject(tipoProdutoJSON : any) {
    let tipoProduto : ITipoProduto = {
        id_tipo_produto : null,
        nome_tipo : null,
        descricao : null
    }

    Object.keys(tipoProdutoJSON).forEach((key: any) => {
        if (key in tipoProduto) {
            tipoProduto[key as keyof ITipoProduto] = tipoProdutoJSON[key as keyof ITipoProduto]
        }
    });

    return tipoProduto
}



export {
    objectToJSON,
    JSONToObject
}