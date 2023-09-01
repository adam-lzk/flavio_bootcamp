import { useState } from 'react'
import './App.css'

export default function Form() {
  const [username, setUsername] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()  // this is necessary so the browser does not perform the default form submit behavior
                            // which is to do a GET request to the same URL the page is on (ultimately this means just reloading the page)
    const response = await fetch('/api/form', {  //fetch request to a POST API endpoint
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  }

  return (                          // onSubmit attribute on the form to call the handleSubmit method when the form is submitted
    <form onSubmit={handleSubmit}>
      Username:
      <input
        type='text'
        value={username}
        onChange={(event) => {  // onChange for tracking changes in the state of an element in a form field
          setUsername(event.target.value)
        }}
      />
    </form>
  )
}
