import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Navbar from "./Navbar";
import PostService from "./PostService";
import StylishLoader from "./Loading";
import { useParams } from "react-router-dom";
function AllPostList() {
    const { query } = useParams();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]); // Declare state for posts
    // This function will load the posts from Firestore
    async function loadPosts() {
        const fetchedPosts = await PostService.getPosts(); // Fetch posts from Firestore

        setPosts(fetchedPosts);
        setLoading(false); // Set the posts in the state
    }

    // Use useEffect to load posts when the component mounts
    useEffect(() => {
        loadPosts();
    }, []); // Empty dependency array means this effect runs once when the component mounts
    if (loading) {
        return <StylishLoader />;
    }
    var newFilteredQueryPosts = posts;
    if (query) {
        var safeQuery = query.replace("+", " ");
        newFilteredQueryPosts = posts.map((post) => post).filter((post) => post.title.toLowerCase().includes(safeQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(safeQuery.toLowerCase()));

    }
    if (newFilteredQueryPosts.length === 0) {
        return (
            <div className="container mx-auto">
                <Navbar initialQuery={safeQuery} />
                <div className="container bg-black p-8 pt-24 text-center">
                    <h1 className="text-3xl font-bold text-white pb-4">No Posts Found</h1>
                </div>
            </div>
        );
    }
    return (
        <div className="container mx-auto">
            <Navbar initialQuery={safeQuery} />
            <div className="container bg-black p-8 pt-24">
                <h1 className="text-3xl font-bold text-white pb-4">All Posts</h1>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {newFilteredQueryPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

            </div>
        </div>
    );


}

export default AllPostList;
