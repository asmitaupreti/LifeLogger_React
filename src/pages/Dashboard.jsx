import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import Breadcrumbheader from "../components/Breadcrumbheader";
import DisplayProject from "../features/DisplayProject";
import ModelLayout from "../ui/ModelLayout";
import CreateLifeProject from "../features/CreateLifeProject";
import { useState } from "react";
// import Breadcrumbheader from "../components/Breadcrumbheader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showCreateLifeProject, setshowCreateLifeProject] = useState(false);

  function closeCreateForm(value) {
    setshowCreateLifeProject(value);
  }

  return (
    <div className="bg-slate-50  flex  h-screen z-0 ">
      <div className="  container mx-auto  ">
        <div className="mx-5 h-24 font-medium flex justify-between items-center ">
          {/* <h1 className="text-xl font-bold text-slate-500">Life Project</h1> */}

          <Breadcrumbheader />

          <Button name={"Create Project"} onClick={closeCreateForm} />
          {showCreateLifeProject && (
            <ModelLayout label="Create Life Project" onClick={closeCreateForm}>
              <CreateLifeProject />
            </ModelLayout>
          )}
        </div>
        <DisplayProject navigate={navigate} />
      </div>
    </div>
  );
};

export default Dashboard;
