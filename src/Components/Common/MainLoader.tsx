import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-[#1f1f1f]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative animate-pulse">
          <img
            src="/fav-icon.svg"
            loading="lazy"
            alt="Loading Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_0_20px_rgba(0,255,127,0.4)]"
          />
          <span className="absolute inset-0 rounded-full blur-xl opacity-40 bg-green-400 animate-ping" />
        </div>
        <div className="text-xl sm:text-2xl font-medium text-green-400 tracking-wide animate-bounce">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
