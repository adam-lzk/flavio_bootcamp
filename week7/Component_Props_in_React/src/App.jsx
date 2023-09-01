import './App.css'

function WelcomeMessage({ myprop }) {  // object destructuring syntax in the accepted argument
  return <h1>{myprop}!</h1>
}

function App() {
  return (
    <div className="App">
      <WelcomeMessage myprop={'This is my prop'} />
    </div>
  )
}

export default App
