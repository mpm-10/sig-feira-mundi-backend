import type { IChamado } from "../interface/IChamado.js";



let idChamado : number | null = null;
let titulo : string | null = null;
let descricao : string | null = null;
let dataChamado : Date | null = null;
let horaChamado : Date | null = null;



function objectToJSON(chamadoObject : IChamado) {
    idChamado = "id_chamado" in chamadoObject ? chamadoObject["id_chamado"] : null;
    titulo = "titulo" in chamadoObject ? chamadoObject["titulo"] : null;
    descricao = "descricao" in chamadoObject ? chamadoObject["descricao"] : null;
    dataChamado = "data_chamado" in chamadoObject ? chamadoObject["data_chamado"] : null;
    horaChamado = "hora_chamado" in chamadoObject ? chamadoObject["hora_chamado"] : null;

    const chamado : IChamado = {
        id_chamado : idChamado,
        titulo : titulo,
        descricao : descricao,
        data_chamado : dataChamado,
        hora_chamado : horaChamado
    };

    return chamado;
}

function JSONToObject(chamadoJSON : IChamado) {
    idChamado = "id_chamado" in chamadoJSON ? chamadoJSON["id_chamado"] : null;
    titulo = "titulo" in chamadoJSON ? chamadoJSON["titulo"] : null;
    descricao = "descricao" in chamadoJSON ? chamadoJSON["descricao"] : null;
    dataChamado = "data_chamado" in chamadoJSON ? chamadoJSON["data_chamado"] : null;
    horaChamado = "hora_chamado" in chamadoJSON ? chamadoJSON["hora_chamado"] : null;

    const chamado : IChamado = {
        id_chamado : idChamado,
        titulo : titulo,
        descricao : descricao,
        data_chamado : dataChamado,
        hora_chamado : horaChamado
    };

    return chamado;
}



export {
    objectToJSON,
    JSONToObject
}