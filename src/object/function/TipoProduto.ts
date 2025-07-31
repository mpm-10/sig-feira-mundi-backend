import type { ITipoProduto } from "../interface/ITipoProduto.js";



let idTipoProduto : number | null = null;
let nomeTipo : string | null = null;
let descricao : string | null = null;



function objectToJSON(tipoProdutoObject : ITipoProduto) {
    idTipoProduto = "id_tipo_produto" in tipoProdutoObject ? tipoProdutoObject["id_tipo_produto"] : null;
    nomeTipo = "nome_tipo" in tipoProdutoObject ? tipoProdutoObject["nome_tipo"] : null;
    descricao = "descricao" in tipoProdutoObject ? tipoProdutoObject["descricao"] : null;
    
    const produto : ITipoProduto = {
        id_tipo_produto : idTipoProduto,
        nome_tipo : nomeTipo,
        descricao : descricao
    };

    return produto;
}

function JSONToObject(tipoProdutoJSON : ITipoProduto) {
    idTipoProduto = "id_tipo_produto" in tipoProdutoJSON ? tipoProdutoJSON["id_tipo_produto"] : null;
    nomeTipo = "nome_tipo" in tipoProdutoJSON ? tipoProdutoJSON["nome_tipo"] : null;
    descricao = "descricao" in tipoProdutoJSON ? tipoProdutoJSON["descricao"] : null;
    
    const produto : ITipoProduto = {
        id_tipo_produto : idTipoProduto,
        nome_tipo : nomeTipo,
        descricao : descricao
    };

    return produto;
}



export {
    objectToJSON,
    JSONToObject
}