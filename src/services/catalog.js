import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const API_URL = "products";

export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/${API_URL}`);
}

export const getAllCategories = () => {
  return axios.get(`${BASE_URL}/${API_URL}/categories`);
};

export const getInCategory = (category) => {
  console.log('getInCategory -------- ', category)
  if (category === 'All') {
    return getAllProducts();
  }
  return axios.get(`${BASE_URL}/${API_URL}/category/${category}`);
}