import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Breadcrumbheader = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((crumb) => {
    return isNaN(crumb);
  });
  return (
    <div>
      <Breadcrumb pathSegments={pathSegments} />
    </div>
  );
};

export default Breadcrumbheader;
