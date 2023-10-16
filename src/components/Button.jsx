import { IoAddOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Button = () => {
  const location = useLocation();
  return (
    <Link to="/createProject" state={{ previousLocation: location }}>
      <button
        type="submit"
        className="text-white py-2.5 px-2 md:px-2 md:py-2  bg-black rounded-lg  flex justify-center items-center "
      >
        <IoAddOutline />
        <p className="hidden md:block ml-2 mr-2 text-sm ">Create Project</p>
      </button>
    </Link>
  );
};

export default Button;
