const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0D1117] bg-opacity-90 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="flex flex-col items-center text-center space-y-4 animate-fade-in-up">
        <div className="w-16 h-16 border-4 border-t-[#37d0de] border-white rounded-full animate-spin mb-4" />
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide animate-pulse">
          Hold on Tight 🎬
        </h1>
        
        <p className="text-md md:text-lg text-gray-300 max-w-sm">
          We’re loading your cinematic experience... <br /> Just a moment!
        </p>
      </div>
    </div>
  );
};

export default Loading;
