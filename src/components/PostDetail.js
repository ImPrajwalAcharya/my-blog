import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import Avatar from './CircularAvatar';
import DividerWithText from './Divider';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import PostService from './PostService';
import StylishLoader from './Loading';
import ErrorMessage from './ErrorMessage';
import { format, isToday, isYesterday } from 'date-fns';

function PostDetail() {
    const { id } = useParams(); // Get the post ID from the URL parameters
    const [selectedPost, setSelectedPost] = useState(null); // State for post data
    const [content, setContent] = useState(''); // State for markdown content
    const [loading, setLoading] = useState(true); // Loading state

    // Function to load the post and its markdown content
    async function loadPostById(id) {
        try {
            // Fetch post data from PostService
            const post = await PostService.getPostById(id);
            setSelectedPost(post); // Set the fetched post

            if (post && post.contentFileName) {
                // Initialize Firebase Storage
                const storage = getStorage();

                // Get the reference for the content file
                const contentRef = ref(storage, `${post.contentFileName}`);

                // Fetch the download URL for the markdown file
                const url = await getDownloadURL(contentRef);

                // Fetch the markdown content from the URL
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Post not found');
                }

                const text = await response.text();
                setContent(text); // Set the markdown content
            }
        } catch (error) {
            console.error('Error loading post:', error);
            setContent('ERROR');
        } finally {
            setLoading(false); // Set loading to false when done
        }
    }

    async function updateNoOfViews(post) {
        try {
            await PostService.updatePost(post.id, {
                ...post,
                views: post.views + 1,
            });
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    useEffect(() => {
        if (id) {
            setLoading(true); // Start loading
            loadPostById(id); // Load the post and content
        }

        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, [id]);

    const formatDate = (date) => {
        const parsedDate = new Date(date);
        if (isToday(parsedDate)) return 'Today';
        if (isYesterday(parsedDate)) return 'Yesterday';
        return format(parsedDate, 'dd MMM yyyy'); // Format date as 22 Nov 2024
    };

    // Show loading state if data is still being fetched
    if (loading) {
        return <StylishLoader />;
    }

    // If no post is found, show an error message
    if (!selectedPost) {
        return (
            <ErrorMessage
                onRetry={() => {
                    loadPostById(id);
                    setLoading(true);
                }}
            />
        );
    }

    if (content === 'ERROR') {
        return (
            <ErrorMessage
                onRetry={() => {
                    loadPostById(id);
                    setLoading(true);
                }}
            />
        );
    }

    updateNoOfViews(selectedPost);
    return (
        <div className="bg-black p-8">
            <div className="fixed top-0 left-0 right-0 bg-black pt-4 pl-8 pr-8">
                <div className="grid grid-flow-col auto-cols-max gap-2 mb-4 items-center">
                    <Avatar
                        src={
                            'https://avatars.githubusercontent.com/u/77449569?v=4'
                        } // Use actual author image URL
                        alt={selectedPost.author || 'Author'}
                        borderColor="border-green-800"
                        border={true}
                    />
                    <div>
                        <div className="text-white">
                            {selectedPost.author || 'Unknown Author'}
                        </div>
                        <div className="text-white">
                            {formatDate(selectedPost.date) || 'Date not available'}
                        </div>
                    </div>
                </div>
                <DividerWithText
                    text={`${selectedPost.minutes || '0'} minutes read`} // Default to '0' if no minutes field
                />
            </div>
            <div className="container pt-12">
                <div className="markdown-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;