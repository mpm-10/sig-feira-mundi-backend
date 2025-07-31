import type { IProduto } from "../interface/IProduto.js";



let idProduto : number | null = null;
let nomeProduto : string | null = null;
let quantidade : number | null = null;
let preco : number | null = null;



function objectToJSON(produtoObject : IProduto) {
    idProduto = "id_produto" in produtoObject ? produtoObject["id_produto"] : null;
    nomeProduto = "nome_produto" in produtoObject ? produtoObject["nome_produto"] : null;
    quantidade = "quantidade" in produtoObject ? produtoObject["quantidade"] : null;
    preco = "preco" in produtoObject ? produtoObject["preco"] : null;
    
    const produto : IProduto = {
        id_produto : idProduto,
        nome_produto : nomeProduto,
        quantidade : quantidade,
        preco : preco
    };

    return produto;
}

function JSONToObject(produtoJSON : IProduto) {
    idProduto = "id_produto" in produtoJSON ? produtoJSON["id_produto"] : null;
    nomeProduto = "nome_produto" in produtoJSON ? produtoJSON["nome_produto"] : null;
    quantidade = "quantidade" in produtoJSON ? produtoJSON["quantidade"] : null;
    preco = "preco" in produtoJSON ? produtoJSON["preco"] : null;
    
    const produto : IProduto = {
        id_produto : idProduto,
        nome_produto : nomeProduto,
        quantidade : quantidade,
        preco : preco
    };

    return produto;
}



export {
    objectToJSON,
    JSONToObject
}