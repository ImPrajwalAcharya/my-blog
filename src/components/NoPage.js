import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NoPage = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
            >
                <h1 className="text-6xl font-extrabold tracking-wide text-blue-500 mb-4 animate-pulse">
                    404
                </h1>
                <p className="text-2xl font-semibold mb-2">
                    Oops! Page Not Found
                </p>
                <p className="text-gray-400 text-base">
                    The page you are looking for does not exist or has been moved.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                    Attempted path: <span className="font-mono text-yellow-500">{location.pathname}</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="mt-6"
            >
                <a
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                >
                    Go Back Home
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-10"
            >
                <img
                    src="https://source.unsplash.com/random/800x600?error"
                    alt="Not Found"
                    className="rounded-lg shadow-lg max-w-full max-h-72 object-cover"
                />
            </motion.div>
        </div>
    );
};

export default NoPage;
