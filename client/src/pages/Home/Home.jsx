import React, { useEffect, useState } from 'react'
import Cards from '../../component/Cards'
import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_API_URL

const Home = () => {
  const [posts, setPosts] = useState()
 
  const getPosts = async () => {
    const response = await axios.get(`${BACKEND_URL}/getPosts`);
    setPosts(response.data.responseData);
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Welcome to the Home Page</h1>
      {posts && <Cards posts={posts} />}
    </div>
  )
}

export default Home
