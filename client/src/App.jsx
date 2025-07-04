import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost/CreatePost'
import SinglePost from './pages/SinglePost/SinglePost'

const App = () => {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/create-post' element={ <CreatePost />} />
      <Route path='/singlepost/:postID' element={ <SinglePost />} />
      <Route path='/updatepost/:postID' element={ <CreatePost />} />


     </Routes>
    
    </>
  )
}

export default App
