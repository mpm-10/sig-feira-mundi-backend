import type { ICliente } from "../interface/ICliente.js"



function objectToJSON(clienteObject : any) {
    const usuario : any = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null
    }

    const cliente : any = {
        id_usuario : null,
        moedas : null
    }

    Object.keys(clienteObject).forEach((key: any) => {
        if (key in usuario) {
            usuario[key as keyof ICliente] = clienteObject[key as keyof ICliente]
        }
        if (key in cliente) {
            cliente[key as keyof ICliente] = clienteObject[key as keyof ICliente]
        }
    });
    
    return [usuario, cliente]
}

function JSONToObject(clienteJSON : any) {
    let cliente : ICliente = {
        id_usuario : null,
        nome_real : null,
        nome_usuario : null,
        senha : null,
        email : null,
        data_registro : null,
        moedas : null
    }

    const usuarioRegister = clienteJSON[0]
    const clienteRegister = clienteJSON[1]

    Object.keys(cliente).forEach((key: any) => {
        if (key in usuarioRegister) {
            cliente[key as keyof ICliente] = usuarioRegister[key as keyof ICliente]
        }
        if (key in clienteRegister) {
            cliente[key as keyof ICliente] = clienteRegister[key as keyof ICliente]
        }
    });

    return cliente
}



export {
    objectToJSON,
    JSONToObject
}