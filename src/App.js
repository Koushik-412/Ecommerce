
import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';

import Header from './components/Header';

function App() {
  const [search,setsearch]=useState('');

  return (
    <div className="App">
      <Header search={search} setsearch={setsearch}/>
      <h1>Products</h1>
      <br/>
      <Cards search={search}/>
    </div>
  );
}

export default App;
