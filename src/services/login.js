import axios from "axios";

import { BASE_URL } from "../constants";

const API_URL = "auth";

export const authenticate = (username, password) => {
    console.log('TRYING TO AUTHENTICATE ****', username, password)
    return axios.post(`${BASE_URL}/${API_URL}/login`, {
        username,
        password,
      })
}
