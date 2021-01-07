import React from 'react';
import './App.css';


import Name from './components/Name';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Name lastname={"lee"}  firstname={"Joe"}/>
      <Details age={28} hair={'blonde'}/>
      <Name lastname={"cash"}  firstname={"Johnny"}/>
      <Details age={89} hair={'black'}/>
      <Name lastname={"washington"}  firstname={"George"}/>
      <Details age={67} hair={'white'}/>
      <Name lastname={"sanchez"}  firstname={"Rick"}/>
      <Details age={100000} hair={'white'}/>
    </div>
  );
}

export default App;
 