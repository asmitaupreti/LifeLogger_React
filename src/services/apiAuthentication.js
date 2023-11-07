import { publicAxios } from "./axiosInstance";

export async function login(data) {
  try {
    const response = await publicAxios.post("Auth/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldnot login");
  }
}

// export  async function getCurrentUser() {
//   try {
//     const response = await authAxios.get("User/GetCurrentUser");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Couldnot get current user");
//   }
// }

export async function refreshToken(data) {
  try {
    const response = await publicAxios.post("Auth/Refresh", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed");
  }
}
