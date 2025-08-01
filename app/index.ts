import cors from "cors"
import bodyParser from "body-parser"
import express from "express"

import type { Application, Request, Response } from "express"
import { environmentVariables } from "../src/io/EnvironmentVariables.js"
import { createModels, startConnection } from "../src/model/Connection.js"

import * as clientesController from "../src/controller/ClientesController.js"
import * as comerciantesController from "../src/controller/ComerciantesController.js"
import * as administradoresController from "../src/controller/AdministradoresController.js"
import * as comerciosController from "../src/controller/ComerciosController.js"
import * as produtosController from "../src/controller/ProdutosController.js"
import * as tipoProdutosController from "../src/controller/TipoProdutosController.js"
import * as promocoesController from "../src/controller/PromocoesController.js"
import * as chamadosController from "../src/controller/ChamadosController.js"



console.log("Iniciando o Serviço Back-End do SIG Feira-Mundi...")
createModels()
startConnection()



const app : Application = express()
const PORT : number = environmentVariables["servicePort"]

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get("/mostrarCliente/:id", clientesController.findOne)
app.get("/mostrarClientes", clientesController.findAll)
app.post("/criarCliente", clientesController.create)
app.put("/editarCliente/:id", clientesController.update)
app.delete("/apagarCliente/:id", clientesController.destroy)

app.get("/mostrarComerciante/:id", comerciantesController.findOne)
app.get("/mostrarComerciantes", comerciantesController.findAll)
app.post("/criarComerciante", comerciantesController.create)
app.put("/editarComerciante/:id", comerciantesController.update)
app.delete("/apagarComerciante/:id", comerciantesController.destroy)

app.get("/mostrarAdministrador/:id", administradoresController.findOne)
app.get("/mostrarAdministradores", administradoresController.findAll)
app.post("/criarAdministrador", administradoresController.create)
app.put("/editarAdministrador/:id", administradoresController.update)
app.delete("/apagarAdministrador/:id", administradoresController.destroy)

app.get("/mostrarComercio/:id", comerciosController.findOne)
app.get("/mostrarComercios", comerciosController.findAll)
app.post("/criarComercio", comerciosController.update)
app.put("/editarComercio/:id", comerciosController.update)
app.delete("/apagarComercio/:id", comerciosController.destroy)

app.get("/mostrarProdutos/:id", produtosController.findOne)
app.get("/mostrarProdutos", produtosController.findAll)
app.post("/criarProdutos", produtosController.create)
app.put("/editarProdutos/:id", produtosController.update)
app.delete("/apagarProdutos/:id", produtosController.destroy)

app.get("/mostrarTipoProduto/:id", tipoProdutosController.findOne)
app.get("/mostrarTipoProdutos", tipoProdutosController.findAll)
app.post("/criarTipoProduto", tipoProdutosController.create)
app.put("/editarTipoProduto/:id", tipoProdutosController.update)
app.delete("/apagarTipoProduto/:id", tipoProdutosController.destroy)

app.get("/mostrarPromocao/:id", promocoesController.findOne)
app.get("/mostrarPromocoes", promocoesController.findAll)
app.post("/criarPromocao", promocoesController.create)
app.put("/editarPromocao/:id", promocoesController.update)
app.delete("/apagarPromocao/:id", promocoesController.destroy)

app.get("/mostrarChamado/:id", chamadosController.findOne)
app.get("/mostrarChamados", chamadosController.findAll)
app.post("/criarChamado", chamadosController.create)
app.put("/editarChamado/:id", chamadosController.update)
app.delete("/apagarChamado/:id", chamadosController.destroy)



app.use((req : Request, res : Response) => {
    res.status(404).json({
        "message" : `Rota ${req.originalUrl} não Encontrada`
    })
})

try {
    app.listen(PORT)
    console.log(`Serviço Iniciado na Porta ${PORT}`);
} catch (err) {
    console.log(`A Porta ${PORT} se Encontra em Uso`);
    process.exit(0);
}