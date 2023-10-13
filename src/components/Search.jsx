import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <form>
      <div className=" flex text-gray-900 text-sm rounded-lg py-1 px-2 bg-orange-500/25 md:w-[350px] lg:w-[500px] ">
        <button
          type="submit"
          className="text-slate-600  py-1 w-8 h-8  flex justify-center items-center"
        >
          <IoSearchOutline />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent focus:outline-none px-2 text-slate-600"
          required
        />
      </div>
    </form>
  );
};

export default Search;
