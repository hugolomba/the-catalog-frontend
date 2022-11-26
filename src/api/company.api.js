import axios from "axios";
import { isEmpty } from "../utils/validation.utils";
import { handleResponseError } from "../utils/errors.utils";
import { getToken, storeToken } from "../utils/token.utils";

class CompanyApi {
  constructor() {
    // configuração do axios para usar sempre como base ou o q está no arquivo `.env`
    // ou, caso não exista, o localhost:5000.
    this.api = axios.create({
      baseURL:
        process.env.REACT_APP_API_URL_USER ||
        "https://final-project-backend-production.up.railway.app/",
      // "http://localhost:5050/",
    });

    this.api.interceptors.request.use((req) => {
      const token = getToken();
      if (token) {
        req.headers = { Authorization: `Bearer ${token}` };
      }
      return req;
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
    // dados.append("services", services);
    dados.append("description", description);
    // dados.append("offers", offers);
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

  // método de edição

  edit = async ({
    name,
    username,
    email,
    phone,
    addresses,
    profileImg,
    description,
  }) => {
    const dados = new FormData();
    dados.append("name", name);
    dados.append("username", username);
    dados.append("email", email);
    dados.append("phone", phone);
    dados.append("addresses", addresses);
    dados.append("description", description);
    dados.append("profileImg", profileImg);
    // dados.append("password", password);
    // dados.append("favorites", favorites);
    const token = getToken();

    try {
      //   const hasEmptyFields = isEmpty(username, password);
      //   if (hasEmptyFields) {
      //     throw new Error('Campos obrigatórios.')
      //   }

      await this.api.put("/companies/edit", dados, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  // método de deletar
  delete = async () => {
    try {
      await this.api.delete("/companies");
    } catch (error) {
      handleResponseError(error);
    }
  };

  // métdodo para adicionar oferta

  addOffer = async ({ offerName, offerPrice, expiration, offerImg }) => {
    const dados = new FormData();
    dados.append("offerName", offerName);
    dados.append("offerPrice", offerPrice);
    dados.append("expiration", expiration);
    dados.append("offerImg", offerImg);

    try {
      await this.api.post("/companies/offer", dados);
    } catch (error) {
      handleResponseError(error);
    }
  };

  // métdodo para adicionar serviço

  addService = async ({ serviceName, servicePrice, serviceImg }) => {
    const dados = new FormData();
    dados.append("serviceName", serviceName);
    dados.append("servicePrice", servicePrice);

    dados.append("serviceImg", serviceImg);

    try {
      await this.api.post("/companies/service", dados);
    } catch (error) {
      handleResponseError(error);
    }
  };

  // método para deletar um sevriço
  removeService = async (serviceId) => {
    console.log("serviceID: ", serviceId);
    try {
      await this.api.delete(`/companies/service/${serviceId}`);
    } catch (error) {
      console.log(error);
    }
  };

  // método para deletar uma oferta
  removeOffer = async (offerId) => {
    console.log("offerID: ", offerId);
    try {
      await this.api.delete(`/companies/offer/${offerId}`);
    } catch (error) {
      console.log(error);
    }
  };

  // lista ofertas da empresa logada

  // update token

  updateToken = async () => {
    // recupera o token que estiver armazenado no localStorage
    const token = getToken();
    try {
      // faz a requisição no backend colocando o token na autorização dos headers.
      // esperamos a resposta ser as informações de dentro do token.
      const { data } = await this.api.get("/company/auth/update-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      storeToken(data.authToken);
      return data;
    } catch (error) {
      handleResponseError(error);
    }
  };
}

const companyApi = new CompanyApi();
export default companyApi;
