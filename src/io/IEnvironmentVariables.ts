interface IEnvironmentVariables{
    servicePort : number
    username : string
    password : string
    host : string
    port : number
    database : string,
    JWTSecret : string
    JWTExpires : number
}



export type {
    IEnvironmentVariables
}