import {autor} from "../models/Autor.js";

class AutorController {

    static async listarAutor (req, res) {
        try{
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch(erro){
            res.status(500).send("Erro ao conectar: ", erro.message);
        }
    };
    
    static async buscaAutorId (req, res) {
        try{
            const id = req.params.id;
            const autorFiltrado = await autor.findById(id);
            res.status(200).json(autorFiltrado);
        } catch(erro){
            res.status(500).send("Erro ao buscar autor: ", erro.message);
        }
    };    
    
    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", Autor: novoAutor });
        } catch(erro){
            res.status(500).send("Erro ao conectar: ", erro.message);
        }
    };
    
    static async editarAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso!" });
        } catch(erro){
            res.status(500).send("Erro ao atualizar autor: ", erro.message);
        }
    }; 
    
    static async deletarAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Autor deletado com sucesso!" });
        } catch(erro){
            res.status(500).send("Erro ao deletar autor: ", erro.message);
        }
    }; 
}

export default AutorController;