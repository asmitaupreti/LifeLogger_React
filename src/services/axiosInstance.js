import axios from "axios";
import { refreshToken } from "./apiAuthentication";
const BASE_URL = "http://192.168.128.111:5101/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,

  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const responseIntercept = axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (error?.response?.status == 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      await refreshToken();
      return axiosPrivate(prevRequest);
    }
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.eject(responseIntercept);
