import type { IProduto } from "../interface/IProduto.js"



function objectToJSON(produtoObject : any) {
    let produto : IProduto = {
        id_produto : null,
        nome_produto : null,
        quantidade : null,
        preco : null
    }

    Object.keys(produtoObject).forEach((key: any) => {
        if (key in produto) {
            produto[key as keyof IProduto] = produtoObject[key as keyof IProduto]
        }
    });

    return produto
}

function JSONToObject(produtoJSON : any) {
    let produto : IProduto = {
        id_produto : null,
        nome_produto : null,
        quantidade : null,
        preco : null
    }

    Object.keys(produtoJSON).forEach((key: any) => {
        if (key in produto) {
            produto[key as keyof IProduto] = produtoJSON[key as keyof IProduto]
        }
    });

    return produto
}



export {
    objectToJSON,
    JSONToObject
}