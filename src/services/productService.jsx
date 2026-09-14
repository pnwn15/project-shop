const API_URL = "https://fakestoreapi.com/products";

export const getProduct = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Fail to fetch");
  }
  const data = await response.json();
  return data;
};