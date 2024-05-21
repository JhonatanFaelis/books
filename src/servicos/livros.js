import axios from "axios";

//passando a url que vou acessar da minha api
const URL = "http://localhost:81/livros"

//instanciando o a api de livros
const livrosAPI = axios.create({ baseURL: URL })

//funcao async que vou usar para pegar os livros
const getLivros = async () => {
 
    const response = await livrosAPI.get("/")
    //retornando os dados acessados por response.data
    return response.data

}

export {getLivros}