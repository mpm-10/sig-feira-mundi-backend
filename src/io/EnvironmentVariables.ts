import dotenv from "dotenv"
import type { IEnvironmentVariables } from "./IEnvironmentVariables.js"



dotenv.config({quiet : true})



const environmentVariables : IEnvironmentVariables = {
    servicePort : Number(process.env.SERVICE_PORT) || 3000,
    username : String(process.env.POSTGRES_USERNAME) || "postgres",
    password : String(process.env.POSTGRES_PASSWORD) || "postgres",
    host : String(process.env.POSTGRES_HOST) || "localhost",
    port : Number(process.env.POSTGRES_PORT) || 5432,
    database : String(process.env.POSTGRES_DATABASE) || "database"
};



export {
    environmentVariables
};