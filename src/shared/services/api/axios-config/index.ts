import Axios from "axios";

import { Environment } from "../../../environment";




export const Api = Axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.request.use(async (config) => {
  const token = 'APP_ACCESS_TOKEN';
  config.headers["Content-Type"]= 'application/json'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
