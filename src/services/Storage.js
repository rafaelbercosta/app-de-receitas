export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
  const response = localStorage.getItem('doneRecipes');
  console.log(response, key);
  return response || [];
};
