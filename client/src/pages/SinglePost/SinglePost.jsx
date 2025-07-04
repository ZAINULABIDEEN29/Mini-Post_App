import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL

const SinglePost = () => {
    const { postID } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`${BACKEND_URL}/getSinglePost?postID=${postID}`);
            setPost(response.data.responseData);
        } catch (err) {
            setError('Failed to fetch post.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, [postID]);

    const deletePost = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.delete(`${BACKEND_URL}/deletePost`, {
                data: { postID }
            });
            if (response.data.responseData) {
                navigate('/');
            }
        } catch (err) {
            setError('Failed to delete post.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className='text-center flex items-center justify-center text-4xl text-black'>Loading ...</div>;
    }
    if (error) {
        return <div className='text-center text-red-500 font-semibold'>{error}</div>;
    }
    if (!post) {
        return <div className='text-center text-gray-500 font-semibold'>No post found.</div>;
    }

    return (
        <div className='p-10 flex sm:flex-col flex-wrap items-center justify-between'>
            <h1>{post.topic}</h1>
            <h2>{post.question}</h2>
            <h3>{post.answer}</h3>
            <div className='gap-5 pt-4 flex flex-wrap'>
                <button onClick={deletePost} className='btn w-full bg-red-500 px-4 py-2 rounded-2xl'>Delete</button>
                <button onClick={() => navigate(`/updatepost/${postID}`)} className='btn bg-green-500 w-full rounded-2xl px-4 py-2'>Edit</button>
            </div>
        </div>
    );
};

export default SinglePost;
