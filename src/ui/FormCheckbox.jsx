const FormCheckbox = (prop) => {
  const { label, register, name, rules, error } = prop;
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="w-4 h-4 text-purple-900 bg-gray-100 border-gray-300 rounded focus:ring-purple-900 "
        {...register(name, rules)}
      />
      <label className="ml-2 text-md font-medium text-black ">{label}</label>
      {error && <label className="text-red-800 text-xs">{error}</label>}
    </div>
  );
};

export default FormCheckbox;
