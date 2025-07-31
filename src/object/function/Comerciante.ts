import type { IComerciante } from "../interface/IComerciante.js";



let idUsuario : number | null = null;
let nomeReal : string | null = null;
let nomeUsuario : string | null = null;
let senha : string | null = null;
let email : string | null = null;
let dataRegistro : Date | null = null;
let telefoneComercial : string | null = null;



function objectToJSON(comercianteObject : IComerciante) {
    idUsuario = "id_usuario" in comercianteObject ? comercianteObject["id_usuario"] : null;
    nomeReal = "nome_real" in comercianteObject ? comercianteObject["nome_real"] : null;
    nomeUsuario = "nome_usuario" in comercianteObject ? comercianteObject["nome_usuario"] : null;
    senha = "senha" in comercianteObject ? comercianteObject["senha"] : null;
    email = "email" in comercianteObject ? comercianteObject["email"] : null;
    dataRegistro = "data_registro" in comercianteObject ? comercianteObject["data_registro"] : null;
    telefoneComercial = "moedas" in comercianteObject ? comercianteObject["telefone_comercial"] : null;

    const comerciante : IComerciante = {
        id_usuario : idUsuario,
        nome_real : nomeReal,
        nome_usuario : nomeUsuario,
        senha : senha,
        email : email,
        data_registro : dataRegistro,
        telefone_comercial : telefoneComercial
    };

    return comerciante;
}

function JSONToObject(comercianteJSON : IComerciante) {
    idUsuario = "id_usuario" in comercianteJSON ? comercianteJSON["id_usuario"] : null;
    nomeReal = "nome_real" in comercianteJSON ? comercianteJSON["nome_real"] : null;
    nomeUsuario = "nome_usuario" in comercianteJSON ? comercianteJSON["nome_usuario"] : null;
    senha = "senha" in comercianteJSON ? comercianteJSON["senha"] : null;
    email = "email" in comercianteJSON ? comercianteJSON["email"] : null;
    dataRegistro = "data_registro" in comercianteJSON ? comercianteJSON["data_registro"] : null;
    telefoneComercial = "moedas" in comercianteJSON ? comercianteJSON["telefone_comercial"] : null;
    
    const comerciante : IComerciante = {
        id_usuario : idUsuario,
        nome_real : nomeReal,
        nome_usuario : nomeUsuario,
        senha : senha,
        email : email,
        data_registro : dataRegistro,
        telefone_comercial : telefoneComercial
    };

    return comerciante;
}



export {
    objectToJSON,
    JSONToObject
}