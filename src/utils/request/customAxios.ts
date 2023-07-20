import axios, { AxiosResponse } from "axios";

const token = process.env.REACT_ACCESS_TOKEN;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const customAxios = async (url: string): Promise<AxiosResponse> => {
  return axios.get(url, options);
};

export { customAxios };
