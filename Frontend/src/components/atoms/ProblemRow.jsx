import React from 'react';
import { useNavigate } from "react-router-dom";
import DifficultyBadge from './DifficultyBadge';

function ProblemRow({ problem }) {
    const Navigator = useNavigate();

    const handleClick = () => {
        console.log(`Clicked on ${problem.title}`);
        const problemPath = problem.title.split(' ').join('-').toLowerCase();
        Navigator(`/problems/${problemPath}`);
    }
    
  return (
    <tr className="hover:bg-gray-300" onClick={handleClick}>
      <td className='p-4 text-left border-b border-gray-700'>{problem.title}</td>
      <td className='p-4 text-left border-b border-gray-700'>
        <DifficultyBadge difficulty={problem.difficulty} />
      </td>
      <td className='p-4 text-left border-b border-gray-700'>{problem.acceptance}</td>
    </tr>
  );
}

export default ProblemRow;