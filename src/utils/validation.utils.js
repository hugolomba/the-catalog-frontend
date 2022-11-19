export const isEmpty = (...args) => {
  return [...args].some((arg) => !arg);
};
