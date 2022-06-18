import React, {useState, useEffect} from 'react';
import './App.css';
import HeroContainer from './containers/HeroContainer';

function App() {

  const dotaBackgroundPicture = new URL("./images/DotaBackground.jpeg", import.meta.url)
  
  return (

  <body className='main-container'>
    <HeroContainer/>
  </body>
 ); 
  
}

export default App;