import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import FormSubmitButton from "../ui/FormSubmitButton";
import FormCheckbox from "../ui/FormCheckbox";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useApiLifeProject } from "../services/useApiLifeProject";
import useAuth from "../hooks/useAuth";
import { formateDate } from "../helper/dateFormatter";

function CreateLifeProject({ projectEdit }) {
  const { createLifeProjects, updateLifeProjects } = useApiLifeProject();
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: projectEdit
      ? {
          ...projectEdit,
          startTime: formateDate(projectEdit.startTime),
          endTime: formateDate(projectEdit.endTime),
        }
      : {},
  });
  const { errors } = formState;

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) =>
      projectEdit ? updateLifeProjects(data) : createLifeProjects(data),
    onSuccess: () => {
      toast.success("Life Project added successfully");

      queryClient.invalidateQueries({
        queryKey: ["lifeproject"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
    console.log(data, "from form");
  }

  function onError(errors) {
    console.log(errors, "Form error");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
        <input
          type="hidden"
          {...register("userID", { value: auth?.user?.id })}
          defaultValue={auth?.user?.id}
        />
        <FormInput
          label="Title"
          name="title"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.title?.message}
        />

        <FormInput
          label="Location"
          name="location"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.location?.message}
        />

        <FormInput
          label="Start Date"
          type="date"
          name="startTime"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.startTime?.message}
        />

        <FormInput
          label="End Date"
          type="date"
          name="endTime"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.endTime?.message}
        />
        <FormTextarea
          label="Description"
          name="description"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.description?.message}
        />
        <FormCheckbox
          label="This Life Project ist set to be public"
          name="isPublic"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.ispublic?.message}
        />
      </div>
      <FormSubmitButton label="Submit" disabled={isLoading} />
    </form>
  );
}

export default CreateLifeProject;
