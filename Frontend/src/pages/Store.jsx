import React from 'react';
import { NavBar } from '../components/molecules/NavBar/NavBar';
import Footer from '../components/molecules/Footer/Footer';

const Store = () => {
  return (
    <>
        <NavBar />
    <div>
      <h1>Store Page</h1>
      <p>Welcome to the Store! Here you can find various items for purchase.</p>
    </div>
    <Footer />

    </>
  );
};

export default Store;