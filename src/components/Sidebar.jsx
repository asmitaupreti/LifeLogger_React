import { logo } from "../assets";
import { menus } from "../constants";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  function buttonOnlick(menu) {
    switch (menu.name) {
      case "Logout":
        setAuth({});
        break;

      case "Profile":
        navigate(menu.link);
        break;
      default:
        break;
    }
  }

  return (
    <aside className="min-h-screen w-20 px-4 bg-purple-950 fixed z-10 ">
      <img src={logo} alt="coverimage" className="mb-8 mt-2" />

      <div className="flex flex-col items-center gap-y-2 ">
        {menus.map((menu) => (
          <button
            key={menu.name}
            className="hover:bg-purple-700 rounded-md p-4 transition-all duration-300 ease-linear cursor-pointer flex items-center relative group "
            onClick={() => buttonOnlick(menu)}
          >
            <div>
              {React.createElement(menu?.icon, { size: "25", color: "white" })}
            </div>
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 bg-slate-50 rounded-md shadow-md text-sm transition-all duration-100 origin-left scale-0 group-hover:scale-100">
              {menu.name}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
