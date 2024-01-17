import useAxiosPrivate from '../hooks/useAxiosPrivate'

export const useApiLifeMilestone = () => {
  const authAxios = useAxiosPrivate()

  async function getLifeMilestone(id) {
    try {
      const response = await authAxios.get(`/LifeMilestone/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Projects couldnot be loaded')
    }
  }

  async function createLifeMilestone(data) {
    try {
      const response = await authAxios.post(`/LifeMilestone`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Milestone couldnot be created')
    }
  }

  async function updateLifeProjects(data) {
    try {
      const response = await authAxios.put(
        `/LifeMilestone/${data.projectID}/${data.milestoneID}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Projects couldnot be updated')
    }
  }

  async function deleteLifeMilestone(data) {
    try {
      const response = await authAxios.delete(
        `/LifeMilestone/${data.projectID}/${data.milestoneID}`
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Milestone couldnot be deleted')
    }
  }
  return {
    getLifeMilestone,
    deleteLifeMilestone,
    updateLifeProjects,
    createLifeMilestone,
  }
}
