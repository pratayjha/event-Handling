import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("pratay")
  const [form, setForm] = useState({emailz:"" , phone:""})

  const handleclick = () =>{
    alert("hey i am click")
  }

  const handlemouseover = () =>{
    alert("hey i am mouseover")
  }

  // const handlechange = (e) =>{
  //   setName(e.target.value)
  // }

  const handlechange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
     <div className="button">
      <button onClick={handleclick}>click me</button>
     </div>

     {/* <div className="red" onMouseOver={handlemouseover}>
      i am red
     </div> */}

     <input type = "text" name= 'email' value={form.email} onChange={handlechange}/>
     <input type = "text" name = 'phone' value={form.phone} onChange={handlechange}/>
    </>
  )
}

export default App
