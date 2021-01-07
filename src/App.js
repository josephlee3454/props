import React from 'react';
import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card lastname={"lee"} firstname={"joe"} age={28} hair={"dirty blonde"}/>
      <Card lastname={"doe"} firstname={"jon"} age={58} hair={"black"}/>
      <Card lastname={"ragnar"} firstname={"fin"} age={20} hair={"blonde"}/>
      <Card lastname={"patenoude"} firstname={"patty"} age={78} hair={"grey"}/>
    </div>
  );
}

export default App;
 