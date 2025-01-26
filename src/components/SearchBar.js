import React, { useState } from "react";

const SearchBar = ({ onSearch, initialQuery }) => { // Destructure both props from the same object
    const [query, setQuery] = useState(initialQuery || ""); // Use initialQuery as default if provided

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query); // Pass the query back to the parent component
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto">
            <label htmlFor="search-input" className="sr-only">
                Search
            </label>
            <input
                id="search-input"
                type="text"
                name="search"
                placeholder="Search Blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label="Search"
            />
            <button
                type="submit"
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                aria-label="Submit search"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
