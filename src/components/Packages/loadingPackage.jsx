const LoadingPackage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-7 animate-pulse">
    <div className="shadow-xl rounded-md h-64 bg-gray-200  p-5">
      <div className="w-full h-20 bg-gray-400 opacity-60 rounded-md" />
      <div className="mt-10 w-full h-30 bg-red-500" />
    </div>
    <div className="hidden lg:block shadow-xl rounded-md h-64 bg-gray-200  p-5">
      <div className="w-full h-20 bg-gray-400 opacity-60 rounded-md" />
      <div className="mt-10 w-full h-30 bg-red-500" />
    </div>
    <div className="hidden lg:block shadow-xl rounded-md h-64 bg-gray-200 p-5">
      <div className="w-full h-20 bg-gray-400 opacity-60 rounded-md" />
      <div className="mt-10 w-full h-30 bg-red-500" />
    </div>
  </div>
);

export default LoadingPackage;
