import React from 'react';

function DifficultyBadge({ difficulty }) {
    const difficultyClasses = {
      easy: 'bg-teal-500',
      medium: 'bg-yellow-500',
      hard: 'bg-red-500',
    };
  
    return (
      <span className={`rounded-full py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm ${difficultyClasses[difficulty.toLowerCase()]}`}>
        {difficulty}
      </span>
    );
  }

export default DifficultyBadge;