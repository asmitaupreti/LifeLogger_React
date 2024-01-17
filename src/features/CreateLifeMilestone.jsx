import FormInput from '../ui/FormInput'
import FormTextarea from '../ui/FormTextarea'
import FormSubmitButton from '../ui/FormSubmitButton'
import { useApiLifeMilestone } from '../services/useApiLifeMilestone'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { formateDate } from '../helper/dateFormatter'

const CreateLifeMilestone = ({ milestoneEdit }) => {
  const location = useLocation()
  const { createLifeMilestone, updateLifeMilestone } = useApiLifeMilestone()

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) =>
      milestoneEdit ? updateLifeMilestone(data) : createLifeMilestone(data),
    onSuccess: () => {
      toast.success('Life Project added successfully')

      queryClient.invalidateQueries({
        queryKey: ['lifemilestone'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  const { register, handleSubmit, formState } = useForm({
    defaultValues: milestoneEdit
      ? {
          ...milestoneEdit,
          date: formateDate(milestoneEdit.date),
        }
      : {},
  })

  function onSubmit(data) {
    mutate(data)
    console.log(data, 'from form')
  }

  const { errors } = formState

  function onError(errors) {
    console.log(errors, 'Form error')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
        <input
          type="hidden"
          {...register('projectID', { value: location.pathname.split('/')[2] })}
          defaultValue={location.pathname.split('/')[2]}
        />
        <FormInput
          label="Title"
          name="milestoneName"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.milestoneName?.message}
        />

        <FormInput
          label="Location"
          name="location"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.location?.message}
        />

        <FormInput
          label="Start Date"
          type="date"
          name="date"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.date?.message}
        />
        <FormInput
          label="Involved people"
          name="peopleInvolved"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.peopleInvolved?.message}
        />
        <FormInput
          label="Weather"
          name="weather"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.weather?.message}
        />
        <FormInput
          label="Sentiment"
          name="sentiment"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.sentiment?.message}
        />
        <FormInput
          label="Related Links"
          name="relatedLinks"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.sentirelatedLinksment?.message}
        />
        <FormInput
          label="Achievement Level"
          name="achievementLevel"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.achievementLevel?.message}
        />

        <FormInput
          label="Financial Impact"
          name="financialImpact"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.financialImpact?.message}
        />
        <FormTextarea
          label="Notes"
          name="privateNotes"
          register={register}
          rules={{ required: 'This field is required' }}
          error={errors?.tiprivateNotestle?.message}
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

export default CreateLifeMilestone
