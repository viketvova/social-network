import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';


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