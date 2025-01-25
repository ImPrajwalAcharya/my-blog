import React, { useEffect, useState } from "react";
import PostList from "../components/PostLists";
import Navbar from "./Navbar";
import PostService from "./PostService";
import StylishLoader from "./Loading";
function Home() {
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
    return (
        <div className="container mx-auto">
            <Navbar />
            <PostList posts={posts} /> {/* Pass posts as a prop to PostList */}
        </div>
    );
}

export default Home;
