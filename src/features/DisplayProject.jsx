import DisplaylistLayout from "../ui/DisplaylistLayout";

import { Card, Spinner } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getLifeProjects } from "../services/apiLifeProjects";

const DisplayProject = ({ navigate }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["lifeproject"],
    queryFn: getLifeProjects,
  });

  if (isLoading) return <Spinner />;

  if (error) return <div>Failed to load</div>;
  return (
    <DisplaylistLayout>
      {data.products.map((item, index) => (
        <Card key={index} item={item} navigate={navigate} />
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayProject;
