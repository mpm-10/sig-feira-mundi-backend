interface IAdministrador {
    id_usuario : number | null,
    nome_real : string | null,
    nome_usuario : string | null,
    senha : string | null,
    email : string | null,
    data_registro : Date | null,
    token_acesso : string | null,
    nivel_acesso : number | null,
    area : string | null,
    ultima_atividade : Date | null
}



export type {
    IAdministrador
}