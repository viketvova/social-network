import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}



export default App;