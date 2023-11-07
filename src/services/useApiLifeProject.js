import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const useApiLifeProject = () => {
  const authAxios = useAxiosPrivate();
  async function getLifeProjects() {
    try {
      const response = await authAxios.get(
        `/Lifeproject/${"3176c74b-730f-4db1-8bf9-e2fe0aa93d3f"}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Life Projects couldnot be loaded");
    }
  }

  async function createLifeProjects(data) {
    try {
      const response = await authAxios.post(
        "https://dummyjson.com/products/add",
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
      throw new Error("Life Projects couldnot be created");
    }
  }

  async function updateLifeProjects(data) {
    try {
      const response = await authAxios.put(
        `https://dummyjson.com/products/${data.id}`,
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

  async function deleteLifeProject(id) {
    try {
      const response = await authAxios.delete(
        `https://dummyjson.com/products/${id}`
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
