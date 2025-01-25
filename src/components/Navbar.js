import React from "react";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black text-white p-4 border-b border-gray-800">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">My Blog</h1>
                <div className="space-x-4">
                    <a href="/my-blog" className="hover:text-gray-400">Home</a>
                    <a href="/my-blog/all-posts" className="hover:text-gray-400">All Posts</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
