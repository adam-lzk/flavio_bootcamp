import { useState } from 'react'
import './App.css'

const Counter = ({ count, setCount }) => {  // sending count and setCount to the Counter component
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <Counter setCount={setCount} count={count} />
    </div>
  )
}

export default App
