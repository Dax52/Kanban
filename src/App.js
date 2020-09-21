import React from 'react';
import Header from './Components/Header';
import Block from './Components/Block';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Block/>
      <Footer
        activeTasks='00'
        finishedTasks='00'
      />
    </div>
  );
}

export default App;
