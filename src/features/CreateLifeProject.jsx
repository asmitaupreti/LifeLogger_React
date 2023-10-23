import { useNavigate } from "react-router-dom";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import FormSubmitButton from "../ui/FormSubmitButton";
import FormCheckbox from "../ui/FormCheckbox";
import ModelLayout from "../ui/ModelLayout";
import { useForm } from "react-hook-form";

function CreateLifeProject() {
  const navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data, "from form");
  }
  return (
    <ModelLayout label="Create Life Project" navigate={navigate} navigateTo="/">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
          <FormInput label="Title" name="title" {...register("title")} />

          <FormInput label="Location" {...register("brand")} />

          <FormInput label="Start Date" type="date" name="project-start-date" />

          <FormInput label="End Date" type="date" name="project-end-date" />
          <FormTextarea label="Description" {...register("description")} />
          <FormCheckbox label="This Life Project ist set to be public" />
        </div>
        <FormSubmitButton label="Submit" />
      </form>
    </ModelLayout>
  );
}

export default CreateLifeProject;
