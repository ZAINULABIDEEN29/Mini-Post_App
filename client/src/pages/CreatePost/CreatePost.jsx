import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BACKEND_URL = import.meta.env.VITE_API_URL;

const CreatePost = () => {
  const { postID } = useParams();
  const [form, setForm] = useState({ topic: '', question: '', answer: '' })
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getSinglePost?postID=${postID}`);
      const post = response.data.responseData
      setForm(post);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (postID) {
      getPosts();
    }
  }, [postID])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true)
    try {
      if (postID) {
        const response = await axios.put(`${BACKEND_URL}/updatePost`, {
          postID,
          form
        });
        if (response?.data?.responseData) {
          navigate(`/single-post/${postID}`)
        }
      } else {
        const response = await axios.post(`${BACKEND_URL}/createpost`, form);
        navigate("/");
      }
    } catch (error) {
      alert('Failed to create post!')
      console.error(error)
    } finally {
      setIsloading(false)
    }
  }

  if (isloading) {
    return <div className='text-center flex items-center justify-center text-4xl text-black '>loading ...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">{postID ? 'Update Post' : 'Create a New Post'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="topic">Topic</label>
          <textarea
            id="topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter topic"
            rows={2}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            value={form.question}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter question"
            rows={3}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="answer">Answer</label>
          <textarea
            id="answer"
            name="answer"
            value={form.answer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter answer"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          {postID ? 'Update Post' : 'Submit Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost
