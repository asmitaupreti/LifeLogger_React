// import Button from "./Button";
import Search from "./Search";

const Nav = () => {
  // const navigate = useNavigate();

  // const handleButtonClick = () => navigate("/createProject");
  return (
    <nav className="flex justify-between items-center py-3 px-5 ml-20">
      <h1 className="text-2xl font-bold mr-4"> Life Logger</h1>
      <div className="flex items-center gap-x-2">
        <Search />
        {/* <Button handleClick={handleButtonClick} /> */}
      </div>
    </nav>
  );
};

export default Nav;
