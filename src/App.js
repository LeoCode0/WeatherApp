import React from 'react';
import Table from './components/Table'
import Time from './components/Time'

import './css/main.css'

function App() {
  

  return (
    <div className="main">
      <form action='get'>
        <input type="text" placeholder="City name"/>
        <button type="submit">Search</button>
      </form>
      <Time />
      <Table />
    </div>
  );
}

export default App;
