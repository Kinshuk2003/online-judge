import React from 'react';
import { NavBar } from '../components/molecules/NavBar/NavBar';
import Footer from '../components/molecules/Footer/Footer';


const Contest = () => {
  return (
    <>
        <NavBar />
        <div>
            <h1>Contest Page</h1>
            <p>Welcome to the Contest page. Here you can find information about upcoming contests.</p>
        </div>
        <Footer />

    </>     
  );
};

export default Contest;