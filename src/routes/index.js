import express from "express";
import livros from "./LivrosRoutes.js";
import autores from "./AutorRoutes.js";

const routes = (app)=> {
    app.route("/").get( (req, res) => res.status(200).send("Curso de Node com MongoDB e Express da Alura"));
    app.use(express.json(), livros, autores);
}

export default routes;