import express from "express";
import LivroController from "../controllers/livroController.js";
const routes = express.Router();
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.buscaLivroId);
routes.put("/livros/:id", LivroController.editarLivro);
routes.post("/livros", LivroController.cadastrarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);
export default routes;