import { Link } from "react-router-dom";
import { logo } from "../assets";
import { menus } from "../constants";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-20 px-4 bg-slate-100 ">
      <img src={logo} alt="coverimage" className="mb-8 mt-2" />

      <div className="flex flex-col items-center gap-y-2">
        {menus.map((menu) => (
          <Link
            to={menu?.link}
            key={menu.name}
            className="hover:bg-white rounded-md p-4 transition-all duration-300 ease-linear cursor-pointer flex items-center relative group "
          >
            <div>{React.createElement(menu?.icon, { size: "25" })}</div>
            <span className="absolute w-auto p-2 m-2 min-w-max left-14 bg-slate-50 rounded-md shadow-md text-sm transition-all duration-100 origin-left scale-0 group-hover:scale-100">
              {menu.name}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
