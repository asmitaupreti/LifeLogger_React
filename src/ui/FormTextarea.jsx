const FormTextarea = ({
  label,
  type = "text",
  register,
  name,
  rules,
  error,
}) => {
  return (
    <div>
      <label className="text-black">{label}</label>
      <textarea
        className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:ring ease-out transition-all duration-75 w-full block  px-4 py-2 mt-2 text-black"
        type={type}
        {...register(name, rules)}
      />
      {error && <label className="text-red-800 text-xs">{error}</label>}
    </div>
  );
};

export default FormTextarea;
