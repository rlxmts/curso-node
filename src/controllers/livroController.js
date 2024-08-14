import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", Livro: novoLivro });
        } catch(erro){
            res.status(500).send("Erro ao conectar: ", erro.message);
        }
    }
}

export default LivroController;