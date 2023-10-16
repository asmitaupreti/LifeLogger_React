import { Button, Card } from "../components"
import { useNavigate } from "react-router-dom";

const LifeMilestone = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => navigate("/createProject");
  return (
    <div className="bg-slate-50  flex  h-screen ">
      <div className="  container mx-auto   ">
        <div className="mx-5 my-6 font-medium flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-500">Life Milestone</h1>
          <Button handleClick={handleButtonClick} name={"Create Milestone"} />
        </div>
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default LifeMilestone