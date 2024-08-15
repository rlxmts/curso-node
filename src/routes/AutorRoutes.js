import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();
routes.get("/autor", AutorController.listarAutor);
routes.get("/autor/:id", AutorController.buscaAutorId);
routes.put("/autor/:id", AutorController.editarAutor);
routes.post("/autor", AutorController.cadastrarAutor);
routes.delete("/autor/:id", AutorController.deletarAutor);
export default routes;