const Profile = () => {
  return (
    <div className="w-full h-screen bg-slate-50 ">
      <div className="container mx-auto  h-full">
        <h1 className="text-xl font-bold text-slate-500 mx-5 h-24 flex justify-between items-center">
          Profile
        </h1>
        <div className=" flex flex-col items-center h-full">
          <div className="flex flex-col  p-4 rounded-md  max-md:w-[90%]  md:w-[80%] lg:w-[70%] xl:w-[50%] bg-white h-[80%]">
            <h1>User profile</h1>
            <h1>Hey form</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
