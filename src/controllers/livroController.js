import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch(erro){
            res.status(500).send("Erro ao conectar: ", erro.message);
        }
    };
    
    static async buscaLivroId (req, res) {
        try{
            const id = req.params.id;
            const livroFiltrado = await livro.findById(id);
            res.status(200).json(livroFiltrado);
        } catch(erro){
            res.status(500).send("Erro ao buscar livro: ", erro.message);
        }
    };    
    
    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", Livro: novoLivro });
        } catch(erro){
            res.status(500).send("Erro ao conectar: ", erro.message);
        }
    };
    
    static async editarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch(erro){
            res.status(500).send("Erro ao atualizar livro: ", erro.message);
        }
    }; 
    
    static async deletarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Livro deletado com sucesso!" });
        } catch(erro){
            res.status(500).send("Erro ao deletar livro: ", erro.message);
        }
    }; 
}

export default LivroController;