import { useNavigate } from "react-router-dom";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import FormSubmitButton from "../ui/FormSubmitButton";
import FormCheckbox from "../ui/FormCheckbox";
import ModelLayout from "../ui/ModelLayout";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLifeProjects } from "../services/apiLifeProjects";

function CreateLifeProject() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => createLifeProjects(data),
    onSuccess: () => {
      toast.success("Life Project added successfully");

      queryClient.invalidateQueries({
        queryKey: ["lifeproject"],
      });

      navigate(-1);
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
    <ModelLayout label="Create Life Project" navigate={navigate} navigateTo="/">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
          <FormInput
            label="Title"
            name="title"
            register={register}
            rules={{ required: "This field is required" }}
            error={errors?.title?.message}
          />

          <FormInput
            label="Location"
            name="brand"
            register={register}
            rules={{ required: "This field is required" }}
            error={errors?.brand?.message}
          />

          <FormInput
            label="Start Date"
            type="date"
            name="projectstartdate"
            register={register}
            rules={{ required: "This field is required" }}
            error={errors?.projectstartdate?.message}
          />

          <FormInput
            label="End Date"
            type="date"
            name="projectenddate"
            register={register}
            rules={{ required: "This field is required" }}
            error={errors?.projectenddate?.message}
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
            name="ispublic"
            register={register}
            rules={{ required: "This field is required" }}
            error={errors?.ispublic?.message}
          />
        </div>
        <FormSubmitButton label="Submit" disabled={isLoading} />
      </form>
    </ModelLayout>
  );
}

export default CreateLifeProject;
