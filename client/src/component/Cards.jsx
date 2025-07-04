import React from 'react'

import { useNavigate } from 'react-router-dom';

const Cards = ({ posts }) => {
  const navigate = useNavigate();
  console.log(posts,"user posts");

  if (!Array.isArray(posts)) {
    return <div className="text-center text-red-500 font-semibold">No posts to display.</div>;
  }
  return (
    <div  className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
      {posts.map((card, idx) => (
        <div key={card._id || idx} onClick={()=> navigate(`/singlepost/${card._id}`)} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">{card.topic || 'No Topic'}</h2>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{card.question || 'No Question'}</h3>
          <div className="card-answer mb-2">
            <span className="font-semibold text-gray-700">Answer:</span>
            {Array.isArray(card.answers) && card.answers.length > 0 ? (
              <ul className="list-disc  list-inside space-y-2 text-gray-600">
                {card.answers.map((answer, i) => (
                  <li key={i}>{answer}</li>
                ))}
              </ul>
            ) : card.answer ? (
              <p className="text-gray-600 mt-1">{card.answer}</p>
            ) : (
              <p className="text-gray-400 mt-1">No answer provided.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
