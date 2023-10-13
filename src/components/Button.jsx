import { IoAddOutline } from "react-icons/io5";

const Button = () => {
  return (
    <button
      type="submit"
      className="text-white py-2.5 px-2 md:px-2 md:py-2  bg-black rounded-lg  flex justify-center items-center "
    >
      <IoAddOutline />
      <p className="hidden md:block ml-2 mr-2 text-sm ">Create Project</p>
    </button>
  );
};

export default Button;
