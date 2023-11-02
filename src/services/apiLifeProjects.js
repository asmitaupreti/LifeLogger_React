import axios from "axios";

export async function getLifeProjects() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Life Projects couldnot be loaded");
  }
}

export async function createLifeProjects(data) {
  try {
    const response = await axios.post(
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

export async function updateLifeProjects(data) {
  try {
    const response = await axios.put(
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

export async function deleteLifeProject(id) {
  try {
    const response = await axios.delete(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Life Project couldnot be deleted");
  }
}
