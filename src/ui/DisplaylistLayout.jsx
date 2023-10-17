const DisplaylistLayout = ({ children }) => {
  return (
    <div className="grid mx-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {children}
    </div>
  );
};

export default DisplaylistLayout;
