import useAxiosPrivate from '../hooks/useAxiosPrivate'

export const useApiLifeIncident = () => {
  const authAxios = useAxiosPrivate()

  async function getLifeIncident(id) {
    try {
      const response = await authAxios.get(`/LifeIncident/${id}`)
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Incident couldnot be loaded')
    }
  }

  async function createLifeIncident(data) {
    try {
      const response = await authAxios.post(`/LifeIncident`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Incident couldnot be created')
    }
  }

  async function updateLifeIncident(data) {
    try {
      const response = await authAxios.put(
        `/LifeIncident/${data.milestoneID}/${data.incidentID}`,
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
      throw new Error('Life Incident couldnot be updated')
    }
  }

  async function deleteLifIncident(data) {
    try {
      const response = await authAxios.delete(
        `/LifeIncident/${data.milestoneID}/${data.incidentID}`
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Life Incident couldnot be deleted')
    }
  }
  return {
    getLifeIncident,
    createLifeIncident,
    updateLifeIncident,
    deleteLifIncident,
  }
}
