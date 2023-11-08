import DisplaylistLayout from "../ui/DisplaylistLayout";

import { Card, Spinner } from "../components";
import { useQuery } from "@tanstack/react-query";
import { useApiLifeProject } from "../services/useApiLifeProject";
import useAuth from "../hooks/useAuth";

const DisplayProject = ({ navigate }) => {
  const { getLifeProjects } = useApiLifeProject();
  const { auth } = useAuth();
  const { isLoading, data, error } = useQuery({
    queryKey: ["lifeproject"],
    queryFn: () => getLifeProjects(auth?.user?.id),
  });

  if (isLoading) return <Spinner />;

  if (error) return <div>Failed to load</div>;
  return (
    <DisplaylistLayout>
      {data.map((item, index) => (
        <Card key={index} item={item} navigate={navigate} />
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayProject;
