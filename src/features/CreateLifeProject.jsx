import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function CreateLifeProject() {
  const navigate = useNavigate();
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      className="fixed left-0 top-0 w-full h-screen overflow-y-scroll bg-black/30 flex flex-col justify-center items-center"
      onClick={() => navigate("/")}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  bg-white relative  rounded-lg max-sm:px-10 py-10 px-20 shadow-md container mx-auto xl:px-30"
      >
        <h1 className="block w-full text-center text-grey-darkest mb-6 lg:mb-12 text-3xl">
          Create Project
        </h1>
        <form action="/" method="post">
          <div className="block lg:flex lg:gap-x-6 items-center justify-between mb-4 lg:mb-8">
            <p className=" text-lg lg:text-xl">Title</p>
            <input
              className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:shadow-outline  w-full lg:w-[85%]"
              type="text"
              name="project-name"
              id="project-name"
            />
          </div>

          <div className="block lg:flex  items-center lg:my-4 justify-between mb-4 lg:mb-8">
            <p className="text-lg lg:text-xl">Description</p>
            <input
              type="text"
              name="project-description"
              id="project-description"
              className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:shadow-outline  w-full lg:w-[85%]"
            />
          </div>
          <div className="block lg:flex  items-center lg:my-4 justify-between mb-4 lg:mb-8">
            <p className="text-lg lg:text-xl">Location</p>
            <input
              type="text"
              name="project-location"
              id="project-location"
              className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:shadow-outline  w-full lg:w-[85%]"
            />
          </div>

          <div className="block lg:flex items-center lg:my-4 justify-between mb-4 lg:mb-8">
            <p className="text-lg lg:text-xl">Start Date</p>
            <input
              type="text"
              name="project-location"
              id="project-location"
              className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:shadow-outline  w-full lg:w-[85%]"
            />
          </div>

          <div className="block lg:flex  items-center lg:my-4 justify-between mb-4 lg:mb-8">
            <p className="text-lg lg:text-xl">End Date</p>
            <input
              type="text"
              name="project-location"
              id="project-location"
              className="border p-2.5 rounded-md leading-normal shadow appearance-none focus:outline-none focus:shadow-outline  w-full lg:w-[85%]"
            />
          </div>

          <div className="flex mb-4 lg:mb-8">
            <label className="relative flex items-center   cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer "
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-400  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 lg:after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-800"></div>
              <p className="ml-3 lg:text-xl ">Public</p>
            </label>
          </div>
          <div className="block lg:flex lg:justify-end  lg:my-4  mb-4 lg:mb-8 ">
            <button
              type="submit"
              className="text-white  p-3 bg-purple-800 rounded-md  w-full lg:w-[30%] lg:self-end"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLifeProject;
