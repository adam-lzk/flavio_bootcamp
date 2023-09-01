import { useEffect, useState } from 'react'
import './App.css'

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {  // the function will be run by React when the component is first rendered, and on every subsequent re-render/update
    console.log(`You clicked ${count} times`)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <CounterWithNameAndSideEffect/>
    </div>
  )
}

export default App
