import type { IPromocao } from "../interface/IPromocao.js";



let idPromocao : number | null = null;
let porcentagemDesconto : number | null = null;
let dataInicio : Date | null = null;
let horaInicio : Date | null = null;
let dataFim : Date | null = null;
let horaFim : Date | null = null;



function objectToJSON(promocaoObject : IPromocao) {
    idPromocao = "id_promocao" in promocaoObject ? promocaoObject["id_promocao"] : null;
    porcentagemDesconto = "porcentagem_desconto" in promocaoObject ? promocaoObject["porcentagem_desconto"] : null;
    dataInicio = "data_inicio" in promocaoObject ? promocaoObject["data_inicio"] : null;
    horaInicio = "hora_inicio" in promocaoObject ? promocaoObject["hora_inicio"] : null;
    dataFim = "data_fim" in promocaoObject ? promocaoObject["data_fim"] : null;
    horaFim = "hora_fim" in promocaoObject ? promocaoObject["hora_fim"] : null;

    const promocao : IPromocao = {
        id_promocao : idPromocao,
        porcentagem_desconto : porcentagemDesconto,
        data_inicio : dataInicio,
        hora_inicio : horaInicio,
        data_fim : dataFim,
        hora_fim : horaFim
    };

    return promocao;
}

function JSONToObject(promocaoJSON : IPromocao) {
    idPromocao = "id_promocao" in promocaoJSON ? promocaoJSON["id_promocao"] : null;
    porcentagemDesconto = "porcentagem_desconto" in promocaoJSON ? promocaoJSON["porcentagem_desconto"] : null;
    dataInicio = "data_inicio" in promocaoJSON ? promocaoJSON["data_inicio"] : null;
    horaInicio = "hora_inicio" in promocaoJSON ? promocaoJSON["hora_inicio"] : null;
    dataFim = "data_fim" in promocaoJSON ? promocaoJSON["data_fim"] : null;
    horaFim = "hora_fim" in promocaoJSON ? promocaoJSON["hora_fim"] : null;

    const promocao : IPromocao = {
        id_promocao : idPromocao,
        porcentagem_desconto : porcentagemDesconto,
        data_inicio : dataInicio,
        hora_inicio : horaInicio,
        data_fim : dataFim,
        hora_fim : horaFim
    };

    return promocao;
}



export {
    objectToJSON,
    JSONToObject
}