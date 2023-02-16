import React,{useState} from 'react'

const App = () => {

  const click=()=>{
    setText("clicked!!!!!!!!!")
  }

  const[Text,setText]=useState("not changed yet!")
  
  return (
    <div>
      <h1>{Text}</h1>
      <button onClick={click}>click me</button>
    </div>
  )
}

export default App
