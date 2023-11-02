const FormSubmitButton = (prop) => {
  const { label, onClick, disabled } = prop;
  return (
    <div className="flex justify-end my-2">
      <button
        type="submit"
        className="text-white  p-2.5 bg-purple-800 rounded-md w-full md:w-28"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default FormSubmitButton;
