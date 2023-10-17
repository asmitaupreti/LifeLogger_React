const FormTextarea = (prop) => {
  const { label, type = "text", name, value, onChange } = prop;
  return (
    <div>
      <label className="text-black">{label}</label>
      <textarea
        className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:ring ease-out transition-all duration-75 w-full block  px-4 py-2 mt-2 text-black"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextarea;
