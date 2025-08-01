import type { ITipoProduto } from "../interface/ITipoProduto.js"



function objectToJSON(tipoProdutoObject : ITipoProduto) {
    let tipoProduto : ITipoProduto = {
        id_tipo_produto : null,
        nome_tipo : null,
        descricao : null
    }

    for(let key in tipoProdutoObject){
        if (key in tipoProduto){
            (tipoProduto as any)[key as keyof ITipoProduto] = tipoProdutoObject[key as keyof ITipoProduto]
        }
    }

    return tipoProduto
}

function JSONToObject(tipoProdutoJSON : ITipoProduto) {
    let tipoProduto : ITipoProduto = {
        id_tipo_produto : null,
        nome_tipo : null,
        descricao : null
    }

    for(let key in tipoProdutoJSON){
        if (key in tipoProduto){
            (tipoProduto as any)[key as keyof ITipoProduto] = tipoProdutoJSON[key as keyof ITipoProduto]
        }
    }

    return tipoProduto
}



export {
    objectToJSON,
    JSONToObject
}