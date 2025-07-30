import cors from "cors";
import bodyParser from "body-parser";
import express from "express";


import type { Application, Request, Response } from "express";
import { environmentVariables } from "../src/io/EnvironmentVariables.js"
import { createModels, startConnection } from "../src/model/Connection.js";



createModels();
startConnection();



const app : Application = express();
const PORT : number = environmentVariables["servicePort"]

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/test", (req : Request, res : Response) => {
    res.json({"test" : 123});
});



app.listen(PORT, () => {console.log("A API está rodando!")});







