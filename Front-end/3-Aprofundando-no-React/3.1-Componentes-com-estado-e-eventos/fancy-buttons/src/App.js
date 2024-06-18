import React, { Component } from 'react';

const handleButtonsOne = () => { console.log('Clique no botão 1!');}
const handleButtonsTwo = () => { console.log('Clique no botão 2!');}
const handleButtonsThree = () => { console.log('Clique no botão 3!');}

class App extends Component {
  
  render() {
    return (
      <div>
        
        <button onClick={ handleButtonsOne }> Butão 1</button>
        <button onClick={ handleButtonsTwo }> Butão 2</button>
        <button onClick={ handleButtonsThree }> Butão 3</button>

      </div>
    );
  }
}

export default App;
