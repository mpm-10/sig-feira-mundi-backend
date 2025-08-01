interface ICliente {
    id_usuario : number | null,
    nome_real : string | null,
    nome_usuario : string | null,
    senha : string | null,
    email : string | null,
    data_registro : Date | null,
    moedas : number | null
}



export type {
    ICliente
}