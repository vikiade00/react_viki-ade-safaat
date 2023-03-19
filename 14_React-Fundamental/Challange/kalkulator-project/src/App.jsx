import { useState } from 'react'

import './App.css'
import CalculatorPage from './pages/CalculatorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <CalculatorPage/>
      </div>
  )
}

export default App
