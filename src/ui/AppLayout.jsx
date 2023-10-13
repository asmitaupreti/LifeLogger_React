import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const AppLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen  ">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
