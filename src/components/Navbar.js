import React from "react";
import ROUTES from "../AppRoutes";
import SearchBar from "./SearchBar";

function Navbar({ initialQuery }) {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 pl-6 pr-6 border-b border-gray-800">
            <div className="container mx-auto flex justify-between">
                <a href={ROUTES.HOME} className="text-2xl font-bold">
                    <img src="logo192.png" alt="PA" className="inline-block h-12 w-12" />
                </a>
                <SearchBar
                    initialQuery={initialQuery}
                    onSearch={(query) => {
                        if (query.trim()) {
                            const safeQuery = encodeURIComponent(query.trim()).replace(/%20/g, '+');
                            window.location.href = `/search/${safeQuery}`;
                        }

                    }}
                />

                <div className="space-x-4">
                    <a href={ROUTES.HOME} className="hover:text-gray-400">Home</a>
                    <a href={ROUTES.ALL_POSTS} className="hover:text-gray-400">All Posts</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;