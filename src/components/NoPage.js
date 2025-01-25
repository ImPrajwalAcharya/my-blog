import { useLocation } from "react-router-dom";

const NoPage = () => {
    const location = useLocation(); // Get the current location object

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] p-6">
            <h1 className="text-3xl font-bold mb-4 text-white text-center">
                404 - Page Not Found
            </h1>
            <p className="text-gray-400 text-center">
                The page you are looking for does not exist.
            </p>
            <p className="text-gray-500 text-center mt-4">
                Attempted path: <span className="font-mono">{location.pathname}</span>
            </p>
        </div>
    );
};

export default NoPage;
