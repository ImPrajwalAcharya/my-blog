import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
    var newFilteredPosts = posts.map((post) => post).sort((a, b) => b.views - a.views).slice(0, 3);
    var newRecentPosts = posts.map((post) => post).sort((a, b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    }).slice(0, 3);
    return (
        <div className="container bg-black p-8 pt-24">
            <h1 className="text-3xl font-bold text-white pb-4">Recent Posts</h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {newRecentPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
            <h1 className="text-3xl font-bold text-white pb-4 mt-8">Popupar Posts</h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {newFilteredPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>

    );
}

export default PostList;
