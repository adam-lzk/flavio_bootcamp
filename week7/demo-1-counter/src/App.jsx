import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import RememberResultButton from './components/RememberResultButton'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  const increment = (sign, step) => {
    if (sign === '+')
    {
      setCount(count + step)
    }
    else {
      setCount(count - step)
    }
  }

  const reset = () => {
    setCount(0)
  }

  const resultsOfCalculations = []

  const rememberResult = () => {
    resultsOfCalculations.push(count)
    displayResults()
  }

  const displayResults = () => {
    console.log(resultsOfCalculations[resultsOfCalculations.length - 1])
  }

  return (
    <div className='App'>
      <h1>Counter: {count}</h1>
      <Button sign={'-'} step={10} increment={increment} />
      <Button sign={'-'} step={1} increment={increment} />
      <Button sign={'+'} step={1} increment={increment} />
      <Button sign={'+'} step={10} increment={increment} />
      <div>
        <ResetButton reset={reset}/>
      </div>
      <div>
        <RememberResultButton rememberResult={rememberResult}/>
        <p>you will see results in console</p>
      </div>
    </div>
  )
}

export default App
