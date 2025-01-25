import React from "react";
import { AlertTriangle } from "lucide-react"; // Install 'lucide-react' for stylish icons.

const ErrorMessage = ({ onRetry }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse" />
                </div>
                <h2 className="text-xl font-semibold">Oops! Couldn't fetch the post content.</h2>
                <p className="text-gray-400">
                    Please check your internet connection or try again later.
                </p>
                <button
                    onClick={onRetry}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-300"
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default ErrorMessage;
