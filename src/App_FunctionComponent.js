import React, { useState } from 'react'
import './App.css';

function App(){

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("!");

  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage("Banana!")}>
        Change message
      </button>
    </div>
  );

}

export default App;
