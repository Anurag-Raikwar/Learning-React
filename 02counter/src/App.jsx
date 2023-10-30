import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15;

  const addValue = ()=>{
    console.log("Clicked",counter);

    if(counter<20){
      setCounter(counter+1);
    }
    else{
    setCounter(15);
  }
}

  const removeValue = ()=>{
    // counter-=1;
    if(counter<=0){
      setCounter(0);
    }
    else{
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
