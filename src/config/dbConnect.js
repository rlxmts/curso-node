import mongoose, {mongo} from "mongoose";

async function conectaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.mj3o0.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}


export default conectaDatabase;

