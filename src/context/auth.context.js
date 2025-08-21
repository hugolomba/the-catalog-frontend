import { createContext, useEffect, useState } from "react";
import userAuthApi from "../api/user.api";
import companyAuthApi from "../api/company.api";
import { getToken, removeToken } from "../utils/token.utils";
import axios from "axios";


const API_URL = process.env.BACKEND_URL || "https://the-catalog-backend.onrender.com";

console.log(">>>>>>", API_URL);

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ type: "0" });
  const [companies, setCompanies] = useState([]);

  // função que chama a verificação para saber se o token ainda é válido
  const authenticateUser = async () => {
    const storedToken = getToken();
    // Ao começar a verificação dizemos ao context que estamos carregando a informação
    setIsLoading(true);
    try {
      if (storedToken) {
        // caso exista um token no localStorage, bate no endpoint de verificação
        const response = await userAuthApi.verify();
        setIsLoggedIn(true);
        // a verificação que fizemos no backend nos devolve
        // um objeto com o payload que existia dentro do token
        setUser(response);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      // caso o token seja invalido ou acontecer qualquer erro na verificação
      // removemos o token e guardamos a informação que não existe usuário logado

      removeToken();
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      // independente de sucesso ou falha, terminamos a verificação
      setIsLoading(false);
    }
  };

  const updateUser = async () => {
    const storedToken = getToken();
    // Ao começar a verificação dizemos ao context que estamos carregando a informação
    setIsLoading(true);
    try {
      if (storedToken) {
        // caso exista um token no localStorage, bate no endpoint de verificação
        const response = await userAuthApi.updateToken();
        setIsLoggedIn(true);
        // a verificação que fizemos no backend nos devolve
        // um objeto com o payload que existia dentro do token
        setUser(response.payload);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      // caso o token seja invalido ou acontecer qualquer erro na verificação
      // removemos o token e guardamos a informação que não existe usuário logado

      removeToken();
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      // independente de sucesso ou falha, terminamos a verificação
      setIsLoading(false);
    }
  };

  //COMPANY
  // função que chama a verificação para saber se o token ainda é válido
  const authenticateCompany = async () => {
    const storedToken = getToken();
    // Ao começar a verificação dizemos ao context que estamos carregando a informação
    setIsLoading(true);
    try {
      if (storedToken) {
        // caso exista um token no localStorage, bate no endpoint de verificação
        const response = await companyAuthApi.verify();
        setIsLoggedIn(true);
        // a verificação que fizemos no backend nos devolve
        // um objeto com o payload que existia dentro do token
        setUser(response);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      // caso o token seja invalido ou acontecer qualquer erro na verificação
      // removemos o token e guardamos a informação que não existe usuário logado
      console.log("erro context: ", error);
      removeToken();
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      // independente de sucesso ou falha, terminamos a verificação
      setIsLoading(false);
    }
  };

  const updateCompany = async () => {
    const storedToken = getToken();
    // Ao começar a verificação dizemos ao context que estamos carregando a informação
    setIsLoading(true);
    try {
      if (storedToken) {
        // caso exista um token no localStorage, bate no endpoint de verificação
        const response = await companyAuthApi.updateToken();
        setIsLoggedIn(true);
        // a verificação que fizemos no backend nos devolve
        // um objeto com o payload que existia dentro do token
        setUser(response.payload);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      // caso o token seja invalido ou acontecer qualquer erro na verificação
      // removemos o token e guardamos a informação que não existe usuário logado

      removeToken();
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      // independente de sucesso ou falha, terminamos a verificação
      setIsLoading(false);
    }
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
    axios
      .get(`${API_URL}/companies`)
      .then((response) => setCompanies(response.data))
      .catch((error) => console.log(error));
  }, []);

  let categories = [];

  const findCategories = (companies) => {
    // companies &&
    let allCategories = [];

    companies.forEach((company) => {
      allCategories.push(company.category[0]);

      // if (categories.includes(company.category[0]))
      // categories.push(company.category[0]);
    });
    const unique = new Set(allCategories);
    categories = [...unique];
  };
  findCategories(companies);

  console.log(categories);

  // ofertas

  let offersBanner = [];

  const findOffersBanner = (companies) => {
    // companies &&
    let allOffersBanner = [];

    companies.forEach((company) => {
      company.offers.forEach((offer) => {
        allOffersBanner.push(offer);
      });

      // if (offersBanner.includes(company.category[0]))
      // offersBanner.push(company.category[0]);
    });
    // const unique = new Set(allOffersBanner);
    // offersBanner = [...unique];
    offersBanner = allOffersBanner;
  };
  findOffersBanner(companies);

  console.log("offers arr: ", offersBanner);

  return (
    // devolvemos o autenticador, com as funções e valores relevantes para serem invocadas fora dele.
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        authenticateUser,
        authenticateCompany,
        logOutUser,
        setIsLoading,
        companies,
        categories,
        updateUser,
        updateCompany,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// exportamos um objeto com ambos o componente e o contexto
export { AuthContext, AuthProviderWrapper };
