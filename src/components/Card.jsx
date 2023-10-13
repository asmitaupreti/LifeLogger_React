const Card = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-y-2 justify-center">
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
