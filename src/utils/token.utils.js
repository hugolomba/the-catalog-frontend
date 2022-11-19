// função que armazena o token no localStorage
export const storeToken = (token) => {
  localStorage.setItem("authToken", token);
};

// função que remove o token localStorage
export const removeToken = () => {
  localStorage.removeItem("authToken");
};

// função que retorna o token do localStorage para ser utilizado
export const getToken = () => {
  return localStorage.getItem("authToken");
};
