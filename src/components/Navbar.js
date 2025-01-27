import React, { useState } from "react";
import ROUTES from "../AppRoutes";
import SearchBar from "./SearchBar";
import { Menu, X } from "lucide-react"; // Importing icons for mobile menu toggle

function Navbar({ initialQuery }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 border-b border-gray-800 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href={ROUTES.HOME} className="text-2xl font-bold flex items-center">
                    <img src="logo192.png" alt="PA" className="inline-block h-12 w-12" />
                </a>

                {/* Search Bar */}
                <div className="hidden lg:block flex-grow mx-4">
                    <SearchBar
                        initialQuery={initialQuery}
                        onSearch={(query) => {
                            if (query.trim()) {
                                const safeQuery = encodeURIComponent(query.trim()).replace(/%20/g, '+');
                                window.location.href = `/search/${safeQuery}`;
                            }
                        }}
                    />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-4">
                    <a href={ROUTES.HOME} className="hover:text-gray-400 transition">
                        Home
                    </a>
                    <a href={ROUTES.ALL_POSTS} className="hover:text-gray-400 transition">
                        All Posts
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden mt-4 space-y-4 text-center bg-black bg-opacity-90 p-4 rounded-lg shadow-lg">
                    <SearchBar
                        initialQuery={initialQuery}
                        onSearch={(query) => {
                            if (query.trim()) {
                                const safeQuery = encodeURIComponent(query.trim()).replace(/%20/g, '+');
                                window.location.href = `/search/${safeQuery}`;
                            }
                        }}
                    />
                    <a href={ROUTES.HOME} className="block hover:text-gray-400 transition">
                        Home
                    </a>
                    <a href={ROUTES.ALL_POSTS} className="block hover:text-gray-400 transition">
                        All Posts
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
