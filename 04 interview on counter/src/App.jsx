import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(0);

const  addCounter = ()  => {
    setCounter(counter +1)
    // setCounter(counter +1)
    // setCounter(counter +1)    this all not increase counter by 4 its only incerase the 1 because of the fiber
    // setCounter(counter +1)
    // setCounter(counter +1)  

    // setcounter : - at the end the setcounter is the function recived is need the function to pass is not getting a state to pass

      setCounter((PrecCounter) => PrecCounter +1)
      setCounter((PrecCounter) => PrecCounter +1)
      setCounter((PrecCounter) => PrecCounter +1)   //using this method we can incerse the counter by the 5
      setCounter((PrecCounter) => PrecCounter +1)
      setCounter((PrecCounter) => PrecCounter +1)
      

    console.log(counter)
    
}

const removeCount = () =>{
  setCounter (counter - 1)
}
  
  return (
    <>
     <h1>Chai aur code || Ganesh Salgar</h1>
     <div>Current Counter is : {counter}</div><br />
    <button onClick={addCounter}>Counter Add </button> <br /><br />
    <button onClick={removeCount}>Counter Reduce</button>     
    </>
  )
}

export default App
