function Spinner() {
  return (
    <div className="absolute top-14 left-7 h-full w-full bg-slate-50 flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
        <div className="w-8 h-8  bg-purple-400 rounded-full"></div>
        <div className="w-8 h-8  bg-purple-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default Spinner;
