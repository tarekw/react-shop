import axios from "axios";

import { BASE_URL, ALL_PRODUCTS } from "../constants";

const API_URL = "products";

let cancelToken;
const cancelPrevious = () => {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }

  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
};

export const getAllProducts = () => {
  cancelPrevious();
  return axios.get(`${BASE_URL}/${API_URL}`, {
    cancelToken: cancelToken.token,
  });
};

export const getAllCategories = () => {
  cancelPrevious();
  return axios.get(`${BASE_URL}/${API_URL}/categories`, {
    cancelToken: cancelToken.token,
  });
};

export const getInCategory = (category) => {
  if (category === ALL_PRODUCTS) {
    return getAllProducts();
  }
  cancelPrevious();
  return axios.get(`${BASE_URL}/${API_URL}/category/${category}`, {
    cancelToken: cancelToken.token,
  });
};
