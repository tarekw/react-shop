import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const API_URL = "auth";

export const authenticate = (username, password) => {
    console.log('TRYING TO AUTHENTICATE ****', username, password)
    return axios.post(`${BASE_URL}/${API_URL}/login`, {
        username,
        password,
      })
}
