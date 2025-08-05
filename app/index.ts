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
import { login, logout, verifyAuth } from "../src/io/Auth.js"



console.log("Iniciando o Serviço Back-End do SIG Feira-Mundi...")
createModels()
startConnection()



const app : Application = express()
const PORT : number = environmentVariables["servicePort"]

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.post("/login", login)
app.get("/logout", verifyAuth, logout)

app.get("/mostrarCliente/:id", verifyAuth, clientesController.findOne)
app.get("/mostrarCliente/:id/chamados", verifyAuth, clientesController.findAllByChamados)
app.get("/mostrarClientes", verifyAuth, clientesController.findAll)
app.get("/mostrarAvaliacoes/:id/cliente", verifyAuth, clientesController.findAllByAvaliacoes)
app.get("/mostrarComerciosFavoritos/:id/cliente", verifyAuth, clientesController.findAllByComerciosFavoritos)
app.get("/mostrarProdutosFavoritos/:id/cliente", verifyAuth, clientesController.findAllByProdutosFavoritos)
app.post("/criarCliente", verifyAuth, clientesController.create)
app.post("/criarAvaliacao/:idUsuario/comercio/:idComercio", verifyAuth, clientesController.createAvaliacao)
app.post("/criarComercioFavorito/:idUsuario/comercio/:idComercio", verifyAuth, clientesController.createComercioFavorito)
app.post("/criarProdutoFavorito/:idUsuario/tipoProduto/:idTipoProduto", verifyAuth, clientesController.createProdutoFavorito)
app.put("/editarCliente/:id", verifyAuth, clientesController.update)
app.delete("/apagarCliente/:id", verifyAuth, clientesController.destroy)

app.get("/mostrarComerciante/:id", verifyAuth, comerciantesController.findOne)
app.get("/mostrarComerciante/:id/chamados", verifyAuth, comerciantesController.findAllByChamados)
app.get("/mostrarComerciante/:id/comercios", verifyAuth, comerciantesController.findAllByComercios)
app.get("/mostrarComerciantes", verifyAuth, comerciantesController.findAll)
app.post("/criarComerciante", verifyAuth, comerciantesController.create)
app.put("/editarComerciante/:id", verifyAuth, comerciantesController.update)
app.delete("/apagarComerciante/:id", verifyAuth, comerciantesController.destroy)

app.get("/mostrarAdministrador/:id", verifyAuth, administradoresController.findOne)
app.get("/mostrarAdministrador/:id/chamados", verifyAuth, administradoresController.findAllByChamados)
app.get("/mostrarAdministradores", verifyAuth, administradoresController.findAll)
app.get("/mostrarResolucoesChamado/:id/administrador", verifyAuth, administradoresController.findAllByResolucaoChamados)
app.post("/criarAdministrador", verifyAuth, administradoresController.create)
app.post("/criarResolucaoChamado/:idUsuario/resolucaoChamado/:idResolucaoChamado", verifyAuth, administradoresController.createResolucaoChamado)
app.put("/editarAdministrador/:id", verifyAuth, administradoresController.update)
app.delete("/apagarAdministrador/:id", verifyAuth, administradoresController.destroy)

app.get("/mostrarComercio/:id", verifyAuth, comerciosController.findOne)
app.get("/mostrarComercio/:id/promocoes", verifyAuth, comerciosController.findAllByPromocoes)
app.get("/mostrarComercio/:id/produtos", verifyAuth, comerciosController.findAllByProdutos)
app.get("/mostrarComercios", verifyAuth, comerciosController.findAll)
app.get("/mostrarAvaliacoes/:id/comercio", verifyAuth, comerciosController.findAllByAvaliacoes)
app.get("/mostrarComerciosFavoritos/:id/comercio", verifyAuth, comerciosController.findAllByComerciosFavoritos)
app.post("/criarComercio", verifyAuth, comerciosController.create)
app.put("/editarComercio/:id", verifyAuth, comerciosController.update)
app.delete("/apagarComercio/:id", verifyAuth, comerciosController.destroy)

app.get("/mostrarProduto/:id", verifyAuth, produtosController.findOne)
app.get("/mostrarProduto/:id/promocoes", verifyAuth, produtosController.findAllByPromocoes)
app.get("/mostrarProdutos", verifyAuth, produtosController.findAll)
app.post("/criarProdutos", verifyAuth, produtosController.create)
app.put("/editarProdutos/:id", verifyAuth, produtosController.update)
app.delete("/apagarProdutos/:id", verifyAuth, produtosController.destroy)

app.get("/mostrarTipoProduto/:id", verifyAuth, tipoProdutosController.findOne)
app.get("/mostrarTipoProduto/:id/produtos", verifyAuth, tipoProdutosController.findAllByProdutos)
app.get("/mostrarTipoProdutos", verifyAuth, tipoProdutosController.findAll)
app.get("/mostrarProdutosFavoritos/:id/tipoProdutos", verifyAuth, tipoProdutosController.findAllByProdutosFavoritos)
app.post("/criarTipoProduto", verifyAuth, tipoProdutosController.create)
app.put("/editarTipoProduto/:id", verifyAuth, tipoProdutosController.update)
app.delete("/apagarTipoProduto/:id", verifyAuth, tipoProdutosController.destroy)

app.get("/mostrarPromocao/:id", verifyAuth, promocoesController.findOne)
app.get("/mostrarPromocoes", verifyAuth, promocoesController.findAll)
app.post("/criarPromocao", verifyAuth, promocoesController.create)
app.put("/editarPromocao/:id", verifyAuth, promocoesController.update)
app.delete("/apagarPromocao/:id", verifyAuth, promocoesController.destroy)

app.get("/mostrarChamado/:id", verifyAuth, chamadosController.findOne)
app.get("/mostrarChamados", verifyAuth, chamadosController.findAll)
app.get("/mostrarResolucoesChamado/:id/chamado", verifyAuth, chamadosController.findAllByResolucaoChamados)
app.post("/criarChamado", verifyAuth, chamadosController.create)
app.put("/editarChamado/:id", verifyAuth, chamadosController.update)
app.delete("/apagarChamado/:id", verifyAuth, chamadosController.destroy)



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