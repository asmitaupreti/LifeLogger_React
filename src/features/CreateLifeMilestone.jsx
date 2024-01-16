// import FormInput from "../ui/FormInput";
// import FormTextarea from "../ui/FormTextarea";
// import FormCheckbox from "../ui/FormCheckbox";
import FormSubmitButton from "../ui/FormSubmitButton";

const CreateLifeMilestone = () => {
  return (
    <form action="/" method="post">
      <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
        {/* <FormInput label="Title" name="project-name" />

          <FormInput label="Location" name="project-location" />

          <FormInput label="Start Date" type="date" name="project-start-date" />

          <FormInput label="End Date" type="date" name="project-end-date" />
          <FormTextarea label="Description" name="project-description" />
          <FormCheckbox label="This Life Project ist set to be public" /> */}
      </div>
      <FormSubmitButton label="Submit" />
    </form>
  );
};

export default CreateLifeMilestone;
