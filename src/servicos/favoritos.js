import axios from "axios";
import { livros } from "../components/Search/DataSearch";

//passando a url que vou acessar da minha api
const URL = "http://localhost:81/favoritos"

//instanciando o a api de livros
const livrosAPI = axios.create({ baseURL: URL })

//funcao async que vou usar para pegar os livros
const getLivrosFavoritos = async () => {

    const response = await livrosAPI.get("/")
    //retornando os dados acessados por response.data
    return response.data

}

const postFavoritos = async (id) => {
    await livrosAPI.post(`/${id}`)
}

const deletarFavoritos = async (id) => {
    await livrosAPI.delete(`/${id}`)
}

export { getLivrosFavoritos, postFavoritos, deletarFavoritos }