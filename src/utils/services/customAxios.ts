import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.REACT_APP_TMDB_ENDPOINT;
const token = process.env.REACT_APP_ACCESS_TOKEN;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const customAxios = async (url: string): Promise<AxiosResponse> => {
  return axios.get(`${BASE_URL}${url}`, options);
};

export { customAxios };
