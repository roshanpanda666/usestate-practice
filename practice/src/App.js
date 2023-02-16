import React,{useState} from 'react'
import'./App.css'
const App = () => {

  const click=()=>{
    setText("clicked!!!!!!!!!")
  }


  const [changeColor,setStyle] = useState ("cont")
  const colorc=()=>{
    setStyle("cont2")

  }
  const[Text,setText]=useState("not changed yet!")

  return (
    <div>
      <h1 className={changeColor}>{Text}</h1>
      <button onClick={click}>click me</button>
      <button onClick={colorc}>change color</button>

    </div>
  )
}

export default App
