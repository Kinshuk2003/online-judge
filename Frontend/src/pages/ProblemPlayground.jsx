import React from 'react';
import { NavBar } from '../components/molecules/NavBar/NavBar';
import Footer from '../components/molecules/Footer/Footer';
import WorkSpace from '../components/organisms/WorkSpace/WorkSpace';
// import { problemConstant } from '../data/problems';

const ProblemPlayground = () => {
  return (
    <>
      <NavBar />
      <div className= "flex-1 h-[calc(100vh-60px)] p-4 overflow-y-auto">
      <WorkSpace/>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProblemPlayground;