import { useState } from "react";
import { FiEdit } from "react-icons/fi";
const Card = () => {
  const [toggleEditMenu, setToggleEditMenu] = useState(false);
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-y-2 justify-center relative ">
      <div
        className="absolute top-1 right-1 p-2.5  items-center flex justify-center "
        onClick={() => setToggleEditMenu(true)}
      >
        <FiEdit size={18} />
      </div>
      {toggleEditMenu && (
        <div
          className="bg-black/70 absolute top-0 right-0 w-full h-full rounded-md items-center flex justify-center gap-8 "
          onClick={() => setToggleEditMenu(false)}
        >
          <button
            type="submit"
            className="bg-orange-700 w-[30%] p-2.5 text-white rounded-md shadow-md"
          >
            Edit
          </button>
          <button
            type="submit"
            className="bg-black w-[30%] p-2.5 text-white rounded-md shadow-md"
          >
            Delete
          </button>
        </div>
      )}

      <h2 className="text-xl font-medium">UX Adujstments</h2>
      <p className="text-sm text-slate-400">
        It just need to adjust the Ui from what you did before
      </p>
      <div className="flex gap-3 items-center justify-between">
        <div className=" flex gap-3 flex-wrap">
          <p className="text-xs bg-purple-100 p-1.5 rounded-md">Research</p>
          <p className="text-xs bg-purple-100 p-1.5 rounded-md">Research</p>
        </div>
        <div className="bg-orange-100 px-3 py-2 rounded-full">
          <p className="text-xs">3</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
