import React from 'react';
import logo from './logo.svg';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner
        title="Shawshank's redemption"
        description="This is a movie about prison break"
        series="Netflix Original"
        theme="dark"
      />
      <Banner
        title="Forest Gump"
        description="This is a movie about how lucky you can get"
        series="Classical cinema"
        theme="light"
      />
      <Banner
        title="Forest Gump"
        description="This is a movie about how lucky you can get"
        series="Classical cinema"
        theme="dark"
      />
      <Banner
        title="Forest Gump"
        description="This is a movie about how lucky you can get"
        series="Classical cinema"
        theme="pink"
      />
    </div>
  );
}

export default App;
