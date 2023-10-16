import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();

 
  const [toggleEditMenu, setToggleEditMenu] = useState(false);
  return (
    <div 
    className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-y-2 justify-center relative "
    
    >
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

      <h2 className="text-lg font-medium">UX Adujstments</h2>
      <p className="text-sm text-slate-400">
        It just need to adjust the Ui from what you did before
      </p>
      <div className="border-[1px] border-red-50 mt-4 mb-2 mx-[-32px]"></div>
      <div className="flex  items-center justify-between h-5">
        
          <p className="text-xs bg-purple-100 p-2 rounded-md cursor-pointer"
          onClick={()=>navigate("/lifemilestone")}
          >Life Milestone</p>
        
     
        <div className="bg-orange-100 px-3 py-2 rounded-full">
          <p className="text-xs">3</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
