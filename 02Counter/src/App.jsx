import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter ] = useState(5) // give two things in array format

  //let counter = 5;
  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const subValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={subValue}
      >Remove Value: </button>
      <footer> Footer : {counter}</footer>
    </>
  )
}

export default App
