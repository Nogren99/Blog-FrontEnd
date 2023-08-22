import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavBar,Post,PostContainer} from './Components'
import {Button} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className="card">
        
        <Button color="primary" variant="outlined" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
