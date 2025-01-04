import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  function generateID(){
    axios.get('http://localhost:3000/generateID')
    .then((res)=>{
      const idContainer = document.getElementById('idContainer')
      idContainer.innerHTML = res.data.id
    }).catch((error)=>{
      console.log(error)
      alert('something went wrong')
    })
  }
  return (
    <div className='wrap'>
    <button id='generateID' onClick={generateID}>Generate ID</button>
    <p>You unique ID:</p>
    <div id="idContainer"></div>
    </div>
  )
}

export default App
