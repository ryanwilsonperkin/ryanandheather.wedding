import React from 'react';
import Head from '../components/head';

const Home = () => {
  return (
    <div>
      <Head title="Ryan & Heather" />
      <img src="/img/itshappening.gif" alt="It's happening"/>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Home;
