import axios from "axios"; // import da dependencia
import { toast } from "react-toastify";

const URL = "https://swapi.dev/api"; // getting environment variables

// criando um client http através do AXIOS
const http = axios.create({
  baseURL: URL,
});

// Definindo o header padrão da aplicação
http.defaults.headers["content-type"] = "application/json";

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // log.debug(`${error.response.status}::${error.response.data}`)
    switch (error.response.status) {
      case 500:
        toast.error("Erro no processamento, tente novamente ");
        return Promise.reject(error);
      default:
        return Promise.reject(error);
    }
  }
);

export default http;
