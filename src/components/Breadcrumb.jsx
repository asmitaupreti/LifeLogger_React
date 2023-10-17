import { NavLink } from "react-router-dom";

const breadcrumbMapping = {
  lifeproject: "Life Project",
  lifemilestone: "Life Milestone",
  lifeincident: "Life Incident",
};

const Breadcrumb = ({ pathSegments }) => {
  console.log(pathSegments, "Breadcrumb");
  return (
    <ul className="flex gap-x-1">
      {pathSegments.map((segment, index) => (
        <li key={index}>
          <NavLink
            to={`/${pathSegments.slice(0, index + 1).join("/")}`}
            className={`text-xl font-bold  ${
              index === pathSegments.length - 1
                ? "text-black "
                : "text-slate-500"
            }`}
          >
            {breadcrumbMapping[segment] || segment}
          </NavLink>
          {index < pathSegments.length - 1 && (
            <span className="ml-2 mr-1 text-xl text-slate-500 font-bold">
              {">"}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
