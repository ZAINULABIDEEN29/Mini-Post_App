import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-white font-bold text-xl">MyApp</div>
        <button className="block md:hidden text-white focus:outline-none" aria-label="Toggle Menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="w-full md:flex md:items-center md:w-auto hidden ">
          <ul className="md:flex md:space-x-6">
            <li><Link to="/" className="block py-2 px-4 text-white hover:bg-blue-700 rounded">Home</Link></li>
            <li><Link to="/create-post" className="block py-2 px-4 text-white hover:bg-blue-700 rounded">Create Post</Link></li>
            <li><Link to="#" className="block py-2 px-4 text-white hover:bg-blue-700 rounded">About</Link></li>
            <li><Link to="#" className="block py-2 px-4 text-white hover:bg-blue-700 rounded">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
