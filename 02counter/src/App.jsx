import { useState } from 'react'

import './App.css'

// let counter = 15;

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const minusValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>react course with shawn {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button> {""}
      <button onClick={minusValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
