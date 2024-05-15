import React, { useState, useEffect } from 'react'
import './App.css';

function App(){

  const [message, setMessage] = useState("Hello world");
  const [state2, setState2] = useState("!");


  // useEffect with empty dependency array =
  // depends on nothing, will run when declared
  // but never again
  useEffect (() => {
    console.log("componet loaded");
  },[]);


  // useEffect with variable in dependency array =
  // depends on variable, will run when declared AND updated
  // but not on anything not listed in dependency array
  useEffect (() => {
    console.log("message updated, new value is: " + message);
  }, [message]);


  // useEffect with return function = 
  // gonna call that function on componentWillUnmount
  // not related to the dependency array at all
  useEffect(() => {
    return(() => {
      console.log("Component will unmount");
    });
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage("Banana!")}>
        Change message
      </button>

      <input type='text' value={message} onChange={(even) => setMessage(even.target.value)} />

    </div>
  );

}

export default App;
