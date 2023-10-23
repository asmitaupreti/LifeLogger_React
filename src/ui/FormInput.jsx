import { forwardRef } from "react";

const FormInput = forwardRef(({ label, type = "text", name }, ref) => {
  return (
    <div>
      <label className="text-black">{label}</label>
      <input
        className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:ring ease-out transition-all duration-75 w-full block  px-4 py-2 mt-2 text-black"
        type={type}
        ref={ref}
      />
    </div>
  );
});

export default FormInput;
