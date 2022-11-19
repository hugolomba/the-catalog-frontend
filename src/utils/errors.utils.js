export const handleResponseError = (error) => {
  throw (error.response && error.response.data) || error.message || error;
};
