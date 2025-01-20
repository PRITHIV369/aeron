import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
  return (
    <nav className="w-full bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Aeron</h1>
        <div className="flex gap-6">
          <button
            onClick={() => navigate('/')}
            className="text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/about')}
            className="text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="text-slate-300 hover:text-yellow-400 transition duration-300"
          >
            Contact
          </button>
        </div>
      </nav>
  )
}

export default Navbar