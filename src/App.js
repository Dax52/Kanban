import React from 'react';
import Header from './Components/Header';
import Block from './Components/Block';
import Footer from './Components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Block/>
      <Footer/>

      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header> */}
    </div>
  );
}

export default App;
