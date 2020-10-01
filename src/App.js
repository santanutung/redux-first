import React from 'react';

import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {

  return (
    <div className="App ">
      <div className="container">
        <div className="row">
          <Shop></Shop>
          <Cart></Cart>

        </div>
      </div>
    </div>
  );
}

export default App;
