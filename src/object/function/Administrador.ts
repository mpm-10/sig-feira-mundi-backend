import type { IAdministrador } from "../interface/IAdministrador.js";



let idUsuario : number | null = null;
let nomeReal : string | null = null;
let nomeUsuario : string | null = null;
let senha : string | null = null;
let email : string | null = null;
let dataRegistro : Date | null = null;
let tokenAcesso : string | null = null;
let nivelAcesso : number | null = null;
let area : string | null = null;
let ultimaAtividade : Date | null = null;



function objectToJSON(administradorObject : IAdministrador) {
    idUsuario = "id_usuario" in administradorObject ? administradorObject["id_usuario"] : null;
    nomeReal = "nome_real" in administradorObject ? administradorObject["nome_real"] : null;
    nomeUsuario = "nome_usuario" in administradorObject ? administradorObject["nome_usuario"] : null;
    senha = "senha" in administradorObject ? administradorObject["senha"] : null;
    email = "email" in administradorObject ? administradorObject["email"] : null;
    dataRegistro = "data_registro" in administradorObject ? administradorObject["data_registro"] : null;
    tokenAcesso = "token_acesso" in administradorObject ? administradorObject["token_acesso"] : null;
    nivelAcesso = "nivel_acesso" in administradorObject ? administradorObject["nivel_acesso"] : null;
    area = "area" in administradorObject ? administradorObject["area"] : null;
    ultimaAtividade = "ultima_atividade" in administradorObject ? administradorObject["ultima_atividade"] : null;

    const administrador : IAdministrador = {
        id_usuario : idUsuario,
        nome_real : nomeReal,
        nome_usuario : nomeUsuario,
        senha : senha,
        email : email,
        data_registro : dataRegistro,
        token_acesso : tokenAcesso,
        nivel_acesso : nivelAcesso,
        area : area,
        ultima_atividade : ultimaAtividade
    }

    return administrador;
}

function JSONToObject(administradorJSON : any) {
    idUsuario = "id_usuario" in administradorJSON ? administradorJSON["id_usuario"] : null;
    nomeReal = "nome_real" in administradorJSON ? administradorJSON["nome_real"] : null;
    nomeUsuario = "nome_usuario" in administradorJSON ? administradorJSON["nome_usuario"] : null;
    senha = "senha" in administradorJSON ? administradorJSON["senha"] : null;
    email = "email" in administradorJSON ? administradorJSON["email"] : null;
    dataRegistro = "data_registro" in administradorJSON ? administradorJSON["data_registro"] : null;
    tokenAcesso = "token_acesso" in administradorJSON ? administradorJSON["token_acesso"] : null;
    nivelAcesso = "nivel_acesso" in administradorJSON ? administradorJSON["nivel_acesso"] : null;
    area = "area" in administradorJSON ? administradorJSON["area"] : null;
    ultimaAtividade = "ultima_atividade" in administradorJSON ? administradorJSON["ultima_atividade"] : null;

    const administrador : IAdministrador = {
        id_usuario : administradorJSON["id_usuario"] || null,
        nome_real : administradorJSON["nome_real"] || null,
        nome_usuario : administradorJSON["nome_usuario"] || null,
        senha : administradorJSON["senha"] || null,
        email : administradorJSON["email"] || null,
        data_registro : administradorJSON["data_registro"] || null,
        token_acesso : administradorJSON["token_acesso"] || null,
        nivel_acesso : administradorJSON["nivel_acesso"] || null,
        area : administradorJSON["area"] || null,
        ultima_atividade : administradorJSON["ultima_atividade"] || null
    }

    return administrador;
}



export {
    objectToJSON,
    JSONToObject
}