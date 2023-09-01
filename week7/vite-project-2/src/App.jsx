// run: npm run dev

import './App.css'

const message = 'Hello!'

function WelcomeMessage() {  // a child component of App
  return <h1>{message}</h1>  // a JSX (returned value) with embedded JavaScript
}

const handleClickEvent = (event) => {  // or use an arrow function inside the onClick: onClick={ (event) => {...}
  console.log('clicked!')
}

function App() {  // a parent component
  return (
    <div className="App">
      <WelcomeMessage/>
      <p>
        {message === 'Hello!' ?
          'The message was "Hello!"' : message}
      </p>
      <button onClick={handleClickEvent}>
        Click here
      </button>
    </div>
  )
}

export default App
