import React from 'react';
import { useState, useEffect } from 'react';
import { NavBar } from '../components/molecules/NavBar/NavBar';
import Footer from '../components/molecules/Footer/Footer';
import ProblemList from '../components/molecules/ProblemList/ProblemList';
import { problemConstant } from '../data/problems';

const Problems = () => {
  const [problemList, setProblemList] = useState([]);

  // useEffect(async () => {
  //   setProblemList(problemConstant);
  // }, []);

  return (
    <>
      <NavBar />
      <div className= "flex-1 h-[calc(100vh-60px)] p-4 overflow-y-auto">
      <ProblemList problems={problemConstant} />
      </div>
      <Footer />
    </>
  );
};

export default Problems;