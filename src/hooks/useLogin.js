import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { login } from "../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "";

  const { setAuth } = useAuth();
  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: (response) => {
      console.log(response, "/lifeproject");
      setAuth(response?.result);
      toast.success("Successfully Logged in");

      navigate("/lifeproject");
    },
    onError: (err) => toast.error(err.message),
  });

  return { userLogin, isLoading };
}
