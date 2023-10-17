import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import Breadcrumbheader from "../components/Breadcrumbheader";
import DisplayMilestone from "../features/DisplayMilestone";

const LifeMilestone = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate("/createProject");
  return (
    <div className="bg-slate-50  flex  h-screen ">
      <div className="  container mx-auto   ">
        <div className="mx-5 h-24 font-medium flex justify-between items-center">
          <Breadcrumbheader />
          <Button handleClick={handleButtonClick} name={"Create Milestone"} />
        </div>
        <DisplayMilestone navigate={navigate} />
      </div>
    </div>
  );
};

export default LifeMilestone;
