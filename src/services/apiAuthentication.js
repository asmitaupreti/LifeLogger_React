import { axiosInstance, axiosPrivate } from "./axiosInstance";

export async function login(data) {
  try {
    const response = await axiosInstance.post("Auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldnot login");
  }
}

export async function getCurrentUser() {
  try {
    const response = await axiosPrivate.get("User/GetCurrentUser");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldnot get current user");
  }
}

export async function refreshToken() {
  try {
    const response = await axiosPrivate.get("Auth/Refresh");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed");
  }
}
