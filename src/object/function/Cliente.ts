import type { ICliente } from "../interface/ICliente.js"



function objectToJSON(clienteObject : ICliente) {
    let cliente : ICliente = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        moedas : null
    }

    for(let key in clienteObject){
        if (key in cliente){
            (cliente as any)[key as keyof ICliente] = clienteObject[key as keyof ICliente]
        }
    }

    return cliente
}

function JSONToObject(clienteJSON : ICliente) {
    let cliente : ICliente = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        moedas : null
    }

    for(let key in clienteJSON){
        if (key in cliente){
            (cliente as any)[key as keyof ICliente] = clienteJSON[key as keyof ICliente]
        }
    }

    return cliente
}



export {
    objectToJSON,
    JSONToObject
}