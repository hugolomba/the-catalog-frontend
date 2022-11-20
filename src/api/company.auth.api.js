import axios from "axios";
import { isEmpty } from "../utils/validation.utils";
import { handleResponseError } from "../utils/errors.utils";
import { getToken, storeToken } from "../utils/token.utils";

class authApi {
  constructor() {
    // configuração do axios para usar sempre como base ou o q está no arquivo `.env`
    // ou, caso não exista, o localhost:5000.
    this.api = axios.create({
      baseURL:
        process.env.REACT_APP_API_URL_USER ||
        "https://final-project-backend-production.up.railway.app/",
    });
  }

  // método de cadastro/signup
  // crie uma função de signup que envia os dados de cadastro para o nosso endpoint da API
  signup = async ({
    name,
    username,
    email,
    phone,
    addresses,
    category,
    subcategory,
    profileImg,
    coverImg,
    password,
    services,
    description,
    offers,
  }) => {
    const dados = new FormData();
    dados.append("name", name);
    dados.append("username", username);
    dados.append("email", email);
    dados.append("phone", phone);
    dados.append("addresses", addresses);
    dados.append("category", category);
    dados.append("subcategry", subcategory);
    dados.append("profileImg", profileImg);
    dados.append("coverImg", coverImg);
    dados.append("password", password);
    dados.append("services", services);
    dados.append("description", description);
    dados.append("offers", offers);
    try {
      //   const hasEmptyFields = isEmpty(username, password);
      //   if (hasEmptyFields) {
      //     throw new Error('Campos obrigatórios.')
      //   }

      await this.api.post("/company/auth/cadastro", dados);
    } catch (error) {
      handleResponseError(error);
    }
  };

  // método de login
  // crie uma função de login que envia os dados de login para o nosso endpoint da API
  // em caso de sucesso, receberemos o token de volta, você pode usar a função auxiliar de armazenar o token no
  // localStorage, essa função será criada mais adiante.

  login = async ({ username, password }) => {
    try {
      const hasEmptyFields = isEmpty(username, password);
      if (hasEmptyFields) {
        throw new Error("Campos obrigatórios.");
      }
      const { data } = await this.api.post("/company/auth/login", {
        username,
        password,
      });
      console.log(data.authToken);
      storeToken(data.authToken);
    } catch (error) {
      handleResponseError(error);
    }
  };

  // método de verificação
  verify = async () => {
    // recupera o token que estiver armazenado no localStorage
    const token = getToken();
    try {
      // faz a requisição no backend colocando o token na autorização dos headers.
      // esperamos a resposta ser as informações de dentro do token.
      const { data } = await this.api.get("/company/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      return data.authenticatedUser;
    } catch (error) {
      handleResponseError(error);
    }
  };
}

const CompanyAuthApi = new authApi();
export default CompanyAuthApi;
