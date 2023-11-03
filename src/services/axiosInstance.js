import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://192.168.128.111:5101/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
