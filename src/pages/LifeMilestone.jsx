import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import Breadcrumbheader from "../components/Breadcrumbheader";
import DisplayMilestone from "../features/DisplayMilestone";
import ModelLayout from "../ui/ModelLayout";
import CreateLifeMilestone from "../features/CreateLifeMilestone";
import { useState } from "react";

const LifeMilestone = () => {
  const navigate = useNavigate();
  const [showCreateLifeMileSton, setshowCreateLifeMileSton] = useState(false);

  const closeCreateLifeMileStoneForm = (value) => {
    setshowCreateLifeMileSton(value);
  };

  return (
    <div className="bg-slate-50  flex  h-screen z-0 ">
      <div className="  container mx-auto  ">
        <div className="mx-5 h-24 font-medium flex justify-between items-center ">
          {/* <h1 className="text-xl font-bold text-slate-500">Life Project</h1> */}

          <Breadcrumbheader />

          <Button
            name={"Create Life Milestone"}
            onClick={closeCreateLifeMileStoneForm}
          />
          {showCreateLifeMileSton && (
            <ModelLayout
              label="Create Life Project"
              onClick={closeCreateLifeMileStoneForm}
            >
              <CreateLifeMilestone />
            </ModelLayout>
          )}
        </div>
        <DisplayMilestone navigate={navigate} />
      </div>
    </div>
  );
};

export default LifeMilestone;
