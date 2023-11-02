import { axiosInstance } from "./axiosInstance";

export async function login(data) {
  try {
    const response = await axiosInstance.post("Auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldnot login");
  }
}

export async function getCurrentUser(data) {
  try {
    const response = await axiosInstance.post("Auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldnot login");
  }
}
