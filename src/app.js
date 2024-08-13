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

const buscaLivro = (id)=> {
    return livros.findIndex( livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res)=> {
    res.status(200).send("Curso de node da Alura");
});

app.get("/livros", (req, res)=> {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res)=> {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res)=> {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1); 
    res.status(200).send("Livro deletado com sucesso!");
});

export default app;