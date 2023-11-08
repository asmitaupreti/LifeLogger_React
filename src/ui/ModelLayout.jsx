const ModelLayout = (prop) => {
  const { label, onClick, children } = prop;
  return (
    <div
      className="fixed left-0 top-0 w-full h-full overflow-y-scroll bg-black/30 flex flex-col justify-center items-center z-10"
      onClick={() => onClick(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  bg-white relative  rounded-lg max-sm:px-10 py-8 px-10 shadow-md container mx-auto  max-md:w-[85%] lg:w-[70%]  xl:px-30"
      >
        <h1 className="block w-full text-center text-grey-darkest mb-6 lg:mb-12 text-xl font-bold">
          {label}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default ModelLayout;
