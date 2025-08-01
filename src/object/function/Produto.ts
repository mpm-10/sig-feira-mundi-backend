import type { IProduto } from "../interface/IProduto.js"



function objectToJSON(produtoObject : IProduto) {
    let produto : IProduto = {
        id_produto : null,
        nome_produto : null,
        quantidade : null,
        preco : null
    }

    for(let key in produtoObject){
        if (key in produto){
            (produto as any)[key as keyof IProduto] = produtoObject[key as keyof IProduto]
        }
    }

    return produto
}

function JSONToObject(produtoJSON : IProduto) {
    let produto : IProduto = {
        id_produto : null,
        nome_produto : null,
        quantidade : null,
        preco : null
    }

    for(let key in produtoJSON){
        if (key in produto){
            (produto as any)[key as keyof IProduto] = produtoJSON[key as keyof IProduto]
        }
    }

    return produto
}



export {
    objectToJSON,
    JSONToObject
}