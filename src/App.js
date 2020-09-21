import React from 'react';
import Header from './Components/Header';
import Block from './Components/Block';

import './App.css';

// let active = 0;
// let finished = 0;

// function onUpdate (newactive,newfinished) {
//     console.log ('опа',newactive,'закончено',newfinished);
//     active = newactive;
//     finished = newfinished;
// }

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Block/>
    </div>
  );
}

export default App;
