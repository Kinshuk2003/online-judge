import React from 'react';
import ProblemRow from '../../atoms/ProblemRow';

function ProblemList({ problems }) {
  return (
    <div className="problem-list">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className='p-4 text-left border-b border-gray-700 text-gray-400 font-medium'>Title</th>
            <th className='p-4 text-left border-b border-gray-700 text-gray-400 font-medium'>Difficulty</th>
            <th className='p-4 text-left border-b border-gray-700 text-gray-400 font-medium'>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <ProblemRow key={problem.id} problem={problem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemList;