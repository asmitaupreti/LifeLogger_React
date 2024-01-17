import FormInput from '../ui/FormInput'
import FormTextarea from '../ui/FormTextarea'
import FormSubmitButton from '../ui/FormSubmitButton'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { formateDate } from '../helper/dateFormatter'
import { useApiLifeIncident } from '../services/useApiLifeIncident'

const CreateLifeIncident = ({ incidentEdit }) => {
  const { createLifeIncident, updateLifeIncident } = useApiLifeIncident()

  const queryClient = useQueryClient()

  const { register, handleSubmit, formState } = useForm({
    defaultValues: incidentEdit
      ? {
          ...incidentEdit,
          incidentDate: formateDate(incidentEdit.incidentDate),
        }
      : {},
  })
  const { errors } = formState

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) =>
      incidentEdit ? updateLifeIncident(data) : createLifeIncident(data),
    onSuccess: () => {
      toast.success('Life incident added successfully')

      queryClient.invalidateQueries({
        queryKey: ['lifeincident'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  function onSubmit(data) {
    mutate(data)
    console.log(data, 'from form')
  }

  function onError(errors) {
    console.log(errors, 'Form error')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
        <input
          type="hidden"
          {...register('milestoneID', {
            value: location.pathname.split('/')[4],
          })}
          defaultValue={location.pathname.split('/')[4]}
        />
        <FormInput
          label="Title"
          name="title"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.title?.message}
        />

        <FormInput
          label="Location"
          name="location"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.location?.message}
        />

        <FormInput
          label="Severity"
          name="severity"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.severity?.message}
        />

        <FormInput
          label="Start Date"
          type="date"
          name="incidentDate"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.incidentDate?.message}
        />

        <FormTextarea
          label="Description"
          name="description"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.description?.message}
        />
      </div>
      <FormSubmitButton label="Submit" disabled={isLoading} />
    </form>
  )
}

export default CreateLifeIncident
