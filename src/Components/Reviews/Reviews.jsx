import React from 'react'
import { Link } from 'react-router-dom';

function Reviews() {
  return (
  <div className="bg-white font-urbanist shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-xl font-semibold text-gray-600 mb-4">Welcome to the Reviews</h1>
      <p className="text-gray-400 mb-6">
        To manage your preferences, please go to the <span className="font-medium">Settings</span> page.
      </p>
      <Link 
        to="/settings" 
        className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-lg shadow-md">
        Go to Settings
      </Link>
    </div>  )
}

export default Reviews