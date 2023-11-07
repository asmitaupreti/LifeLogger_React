import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import toast from "react-hot-toast";
import { useApiLifeProject } from "../services/useApiLifeProject";
// import { useNavigate } from "react-router-dom";
const Card = ({ navigate, item }) => {
  const queryClient = useQueryClient();
  const [toggleEditMenu, setToggleEditMenu] = useState(false);
  const { deleteLifeProject } = useApiLifeProject();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteLifeProject(id),
    onSuccess: () => {
      toast.success("Life Project deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["lifeproject"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-y-2 justify-center relative ">
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
          >
            Edit
          </button>
          <button
            type="submit"
            className="bg-black w-[30%] p-2.5 text-white rounded-md shadow-md"
            onClick={() => mutate(item.id)}
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
          onClick={() => navigate(`${item.id}/${item.navigationurl}`)}
        >
          {item.navigateto}
        </p>

        <div className="bg-orange-100 px-3 py-2 rounded-full">
          <p className="text-xs">{item.childrenCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
