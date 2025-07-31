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





app.get("/mostrarCliente/:id", (req : Request, res : Response) => {});
app.get("/mostrarClientes", (req : Request, res : Response) => {});
app.post("/criarCliente", (req : Request, res : Response) => {});
app.put("/editarCliente/:id", (req : Request, res : Response) => {});
app.delete("/apagarCliente/:id", (req : Request, res : Response) => {});

app.get("/mostrarComerciante/:id", (req : Request, res : Response) => {});
app.get("/mostrarComerciantes", (req : Request, res : Response) => {});
app.post("/criarComerciante", (req : Request, res : Response) => {});
app.put("/editarComerciante/:id", (req : Request, res : Response) => {});
app.delete("/apagarComerciante/:id", (req : Request, res : Response) => {});

app.get("/mostrarAdministrador/:id", (req : Request, res : Response) => {});
app.get("/mostrarAdministradores", (req : Request, res : Response) => {});
app.post("/criarAdministrador", (req : Request, res : Response) => {});
app.put("/editarAdministrador/:id", (req : Request, res : Response) => {});
app.delete("/apagarAdministrador/:id", (req : Request, res : Response) => {});

app.get("/mostrarComercio/:id", (req : Request, res : Response) => {});
app.get("/mostrarComercios", (req : Request, res : Response) => {});
app.post("/criarComercio", (req : Request, res : Response) => {});
app.put("/editarComercio/:id", (req : Request, res : Response) => {});
app.delete("/apagarComercio/:id", (req : Request, res : Response) => {});

app.get("/mostrarProdutos/:id", (req : Request, res : Response) => {});
app.get("/mostrarProdutos", (req : Request, res : Response) => {});
app.post("/criarProdutos", (req : Request, res : Response) => {});
app.put("/editarProdutos/:id", (req : Request, res : Response) => {});
app.delete("/apagarProdutos/:id", (req : Request, res : Response) => {});

app.get("/mostrarTipoProduto/:id", (req : Request, res : Response) => {});
app.get("/mostrarTipoProdutos", (req : Request, res : Response) => {});
app.post("/criarTipoProduto", (req : Request, res : Response) => {});
app.put("/editarTipoProduto/:id", (req : Request, res : Response) => {});
app.delete("/apagarTipoProduto/:id", (req : Request, res : Response) => {});

app.get("/mostrarPromocao/:id", (req : Request, res : Response) => {});
app.get("/mostrarPromocoes", (req : Request, res : Response) => {});
app.post("/criarPromocao", (req : Request, res : Response) => {});
app.put("/editarPromocao/:id", (req : Request, res : Response) => {});
app.delete("/apagarPromocao/:id", (req : Request, res : Response) => {});

app.get("/mostrarChamado/:id", (req : Request, res : Response) => {});
app.get("/mostrarChamados", (req : Request, res : Response) => {});
app.post("/criarChamado", (req : Request, res : Response) => {});
app.put("/editarChamado/:id", (req : Request, res : Response) => {});
app.delete("/apagarChamado/:id", (req : Request, res : Response) => {});





app.use((req, res) => {
    res.status(404).send(`Rota de Acesso ${req.originalUrl} não Encontrada!`);
});

app.listen(PORT);







