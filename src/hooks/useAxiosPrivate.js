import { useEffect } from "react";
import { authAxios } from "../services/axiosInstance";
import useAuth from "./useAuth";
import { refreshToken } from "../services/apiAuthentication";

const useAxiosPrivate = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = authAxios.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth?.token.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = authAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error.response.status == 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const res = await refreshToken(auth?.token);
          prevRequest.headers.Authorization = `Bearer ${res.result.token.accessToken}`;
          setAuth((prevState) => ({ ...prevState, token: res.result.token }));
          return authAxios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      authAxios.interceptors.request.eject(requestIntercept);
      authAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, setAuth]);

  return authAxios;
};

export default useAxiosPrivate;
