import dotenv from "dotenv"
import type { IEnvironmentVariables } from "./IEnvironmentVariables.js"



dotenv.config({quiet : true})



const environmentVariables : IEnvironmentVariables = {
    servicePort : Number(process.env.SERVICE_PORT) || 3000,
    username : String(process.env.POSTGRES_USERNAME) || "postgres",
    password : String(process.env.POSTGRES_PASSWORD) || "postgres",
    host : String(process.env.POSTGRES_HOST) || "localhost",
    port : Number(process.env.POSTGRES_PORT) || 5432,
    database : String(process.env.POSTGRES_DATABASE) || "database",
    JWTSecret : String(process.env.JWT_SECRET) || "",
    JWTExpires : Number(process.env.JWT_EXPIRES) || 60
}



export {
    environmentVariables
}