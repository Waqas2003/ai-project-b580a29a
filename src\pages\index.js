import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to UNICEF</h1>
        <p>For every child, a fair chance in life.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;