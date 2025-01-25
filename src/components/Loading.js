import React from "react";

const StylishLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-150"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default StylishLoader;
