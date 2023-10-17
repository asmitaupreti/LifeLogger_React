import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import Breadcrumbheader from "../components/Breadcrumbheader";
import DisplayProject from "../features/DisplayProject";
// import Breadcrumbheader from "../components/Breadcrumbheader";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50  flex  h-screen z-0 ">
      <div className="  container mx-auto  ">
        <div className="mx-5 h-24 font-medium flex justify-between items-center ">
          {/* <h1 className="text-xl font-bold text-slate-500">Life Project</h1> */}

          <Breadcrumbheader />
          <Button navigateto="/createlifeproject" name={"Create Project"} />
        </div>
        <DisplayProject navigate={navigate} />
      </div>
    </div>
  );
};

export default Dashboard;
