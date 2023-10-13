import { Card } from "../components";

const Dashboard = () => {
  return (
    <div className="bg-slate-50  flex  h-screen mt-5">
      <div className="  container mx-auto mt-10  ">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
