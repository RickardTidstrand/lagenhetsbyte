import React from 'react';
import Header from './components/Header'
import './App.css';

import CardContainer from './components/CardContainer'

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Header/>
        <CardContainer/>
      </div>
    )
  }
}

export default App;
