import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "É assim que acaba"
    },
    {
        id: 2,
        titulo: "Cangaceiro JavaScript"
    }
]

app.get("/", (req, res)=> {
    res.status(200).send("Curso de node da Alura");
});

app.get("/livros", (req, res)=> {
    res.status(200).json(livros);
});

export default app;