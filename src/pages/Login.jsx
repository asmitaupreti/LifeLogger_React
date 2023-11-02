import { useForm } from "react-hook-form";
// import FormInput from "../ui/FormInput";
import FormSubmitButton from "../ui/FormSubmitButton";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuthentication";
import { logo } from "../assets";

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: () => {
      toast.success("Successfully Logged in");

      navigate("/lifeproject");
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ email: "testadmin@test.de", password: "Admin123*" });
    console.log(data, "from form");
  }

  function onError(errors) {
    console.log(errors, "Form error");
  }

  return (
    <div className="bg-purple-50 w-full h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <div className="mb-8 p-1 flex flex-col justify-center items-center ">
          <img src={logo} alt="coverimage" className="mb-8 mt-2 w-20 h-20 " />
          <p className="text-black text-2xl font-medium">
            Log in to your account
          </p>
        </div>
        <div className=" bg-white rounded-md w-[90%] md:w-[60%] lg:w-[40%]  p-8  ">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="my-4">
              <label className="text-black">Email</label>
              <input
                className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:ring ease-out transition-all duration-75 w-full block  px-4 py-2 mt-2 text-black"
                type="text"
                {...register("email", { required: "This field is required" })}
              />
              {errors && (
                <label className="text-red-800 text-xs">
                  {errors.brand?.message}
                </label>
              )}
            </div>

            <div className="mt-4 mb-6">
              <label className="text-black">Password</label>
              <input
                className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:ring ease-out transition-all duration-75 w-full block  px-4 py-2 mt-2 text-black"
                type="password"
                {...register("password", {
                  required: "This field is required",
                })}
              />
              {errors && (
                <label className="text-red-800 text-xs">
                  {errors.brand?.message}
                </label>
              )}
            </div>

            <FormSubmitButton label="Submit" disabled={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
