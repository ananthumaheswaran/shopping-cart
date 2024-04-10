const LoadingPage = () => {
  const LoadingPageCard = () => {
    return (
      <div className="shadow-xl rounded-md m-10 px-10 py-3 flex items-center justify-center bg-white h-[350px] w-[260px]">
        <div className="animate-pulse">
          <div className="flex items-center justify-center rounded bg-gray-200 mx-10 mb-2 h-[200px] w-[200px]"></div>
          <div className="flex items-center flex-col justify-center  py-3 text-sm">
            <div className="w-44 flex items-center justify-center  h-2 mb-2 bg-slate-200 rounded"></div>
            <div className="w-44 flex items-center justify-center  h-2 mt-1 bg-slate-200 rounded"></div>
            <div className="w-20 h-2 rounded bg-slate-200d mt-3"></div>
            <div className="text-xs w-28 h-2 bg-slate-200 rounded mt-3"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center flex-col justify-center px-40">
      <div className="flex items-center justify-center">
        <LoadingPageCard />
        <LoadingPageCard />
        <LoadingPageCard />
        <LoadingPageCard />
      </div>
      <div className="flex items-center justify-center">
        <LoadingPageCard />
        <LoadingPageCard />
        <LoadingPageCard />
        <LoadingPageCard />
      </div>
    </div>
  );
};

export default LoadingPage;
