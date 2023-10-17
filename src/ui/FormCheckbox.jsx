const FormCheckbox = (prop) => {
  const { label } = prop;
  return (
    <div className="flex items-center mb-4">
      <input
        checked
        type="checkbox"
        className="w-4 h-4 text-purple-900 bg-gray-100 border-gray-300 rounded focus:ring-purple-900 "
      />
      <label className="ml-2 text-md font-medium text-black ">{label}</label>
    </div>
  );
};

export default FormCheckbox;
