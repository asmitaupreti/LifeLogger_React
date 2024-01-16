import DisplaylistLayout from "../ui/DisplaylistLayout";
import { FiEdit } from "react-icons/fi";
import { Spinner } from "../components";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useApiLifeProject } from "../services/useApiLifeProject";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import ModelLayout from "../ui/ModelLayout";
import CreateLifeProject from "./CreateLifeProject";

const DisplayProject = ({ navigate }) => {
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const [toggleEditMenu, setToggleEditMenu] = useState(false);
  const [showCreateLifeProject, setshowCreateLifeProject] = useState(false);

  const { getLifeProjects } = useApiLifeProject();
  const { isLoading, data, error } = useQuery({
    queryKey: ["lifeproject"],
    queryFn: () => getLifeProjects(auth?.user?.id),
  });

  const { deleteLifeProject } = useApiLifeProject();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (data) => deleteLifeProject(data),
    onSuccess: () => {
      toast.success("Life Project deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["lifeproject"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Spinner />;

  if (error) return <div>Failed to load</div>;
  return (
    <DisplaylistLayout>
      {data.map((item, index) => (
        <div
          className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-y-2 justify-center relative "
          key={index}
        >
          <div
            className="absolute top-1 right-1 p-2.5  items-center flex justify-center "
            onClick={() => setToggleEditMenu(true)}
          >
            <FiEdit size={18} />
          </div>
          {toggleEditMenu && (
            <div
              className="bg-black/70 absolute top-0 right-0 w-full h-full rounded-md items-center flex justify-center gap-8 "
              onClick={() => setToggleEditMenu(false)}
            >
              <button
                type="submit"
                className="bg-orange-700 w-[30%] p-2.5 text-white rounded-md shadow-md"
                onClick={() => setshowCreateLifeProject(true)}
              >
                Edit
              </button>
              <button
                type="submit"
                className="bg-black w-[30%] p-2.5 text-white rounded-md shadow-md"
                onClick={() => mutate(item)}
                disabled={isDeleting}
              >
                Delete
              </button>
            </div>
          )}

          <h2 className="text-lg font-medium">{item.title}</h2>
          <p className="text-sm text-slate-400">{item.description}</p>
          <div className="border-[1px] border-red-50 mt-4 mb-2 mx-[-32px]"></div>
          <div className="flex  items-center justify-between h-5">
            <p
              className="text-xs bg-purple-100 p-2 rounded-md cursor-pointer"
              onClick={() => navigate(`${item.projectId}/lifemilestone`)}
            >
              {"Life Milestone"}
            </p>

            <div className="bg-orange-100 px-3 py-2 rounded-full">
              <p className="text-xs">{item.lifeMileStoneCount}</p>
            </div>
          </div>
          {showCreateLifeProject && (
            <ModelLayout
              label="Edit Life Project"
              onClick={setshowCreateLifeProject}
            >
              <CreateLifeProject projectEdit={item} />
            </ModelLayout>
          )}
        </div>
      ))}
    </DisplaylistLayout>
  );
};

export default DisplayProject;
