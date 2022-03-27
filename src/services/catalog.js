import axios from "axios";

import { BASE_URL, ALL_PRODUCTS } from "../constants";

const API_URL = "products";

export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/${API_URL}`);
}

export const getAllCategories = () => {
  return axios.get(`${BASE_URL}/${API_URL}/categories`);
};

export const getInCategory = (category) => {
  if (category === ALL_PRODUCTS) {
    return getAllProducts();
  }
  return axios.get(`${BASE_URL}/${API_URL}/category/${category}`);
}