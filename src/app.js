import express from "express";

const app = express();
app.use(express.json());

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

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
})

export default app;