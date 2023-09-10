import { useState,useEffect} from 'react'
import {io} from 'socket.io-client'
import './App.css'

const socket = io('http://localhost:3000')


function App() {
  const [isConnected,setIsConnected] = useState(false)

  useEffect(()=>{
      socket.on('connect', ()=> setIsConnected(true))


      //socket.on('connection',)
  }, [])

  return (
      <div className='App'>
        <h1>{isConnected ? 'CONECTADO' :'ERRROR'}</h1>

      </div>
  )
}

export default App
