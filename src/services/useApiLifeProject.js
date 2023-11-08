import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const useApiLifeProject = () => {
  const authAxios = useAxiosPrivate();

  async function getLifeProjects(id) {
    try {
      const response = await authAxios.get(`/Lifeproject/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Life Projects couldnot be loaded");
    }
  }

  async function createLifeProjects(data) {
    try {
      const response = await authAxios.post(`/Lifeproject`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Life Projects couldnot be created");
    }
  }

  async function updateLifeProjects(data) {
    try {
      const response = await authAxios.put(
        `/Lifeproject/${data.projectId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Life Projects couldnot be updated");
    }
  }

  async function deleteLifeProject(data) {
    try {
      const response = await authAxios.delete(
        `/Lifeproject/${data.userID}/${data.projectId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Life Project couldnot be deleted");
    }
  }
  return {
    getLifeProjects,
    deleteLifeProject,
    updateLifeProjects,
    createLifeProjects,
  };
};
