import type { ICliente } from "../interface/ICliente.js";



let idUsuario : number | null = null;
let nomeReal : string | null = null;
let nomeUsuario : string | null = null;
let senha : string | null = null;
let email : string | null = null;
let dataRegistro : Date | null = null;
let moedas : number | null = null;



function objectToJSON(clienteObject : ICliente) {
    idUsuario = "id_usuario" in clienteObject ? clienteObject["id_usuario"] : null;
    nomeReal = "nome_real" in clienteObject ? clienteObject["nome_real"] : null;
    nomeUsuario = "nome_usuario" in clienteObject ? clienteObject["nome_usuario"] : null;
    senha = "senha" in clienteObject ? clienteObject["senha"] : null;
    email = "email" in clienteObject ? clienteObject["email"] : null;
    dataRegistro = "data_registro" in clienteObject ? clienteObject["data_registro"] : null;
    moedas = "moedas" in clienteObject ? clienteObject["moedas"] : null;

    const cliente : ICliente = {
        id_usuario : idUsuario,
        nome_real : nomeReal,
        nome_usuario : nomeUsuario,
        senha : senha,
        email : email,
        data_registro : dataRegistro,
        moedas : moedas
    };

    return cliente;
}

function JSONToObject(clienteJSON : ICliente) {
    idUsuario = "id_usuario" in clienteJSON ? clienteJSON["id_usuario"] : null;
    nomeReal = "nome_real" in clienteJSON ? clienteJSON["nome_real"] : null;
    nomeUsuario = "nome_usuario" in clienteJSON ? clienteJSON["nome_usuario"] : null;
    senha = "senha" in clienteJSON ? clienteJSON["senha"] : null;
    email = "email" in clienteJSON ? clienteJSON["email"] : null;
    dataRegistro = "data_registro" in clienteJSON ? clienteJSON["data_registro"] : null;
    moedas = "moedas" in clienteJSON ? clienteJSON["moedas"] : null;

    const cliente : ICliente = {
        id_usuario : idUsuario,
        nome_real : nomeReal,
        nome_usuario : nomeUsuario,
        senha : senha,
        email : email,
        data_registro : dataRegistro,
        moedas : moedas
    };

    return cliente;
}



export {
    objectToJSON,
    JSONToObject
}