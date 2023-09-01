import { useState } from 'react'

function Form(props) {
  const [username, setUsername] = useState('')  // username is a state

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(`https://api.github.com/users/${username}`)  // using the Fetch API to get the person's information from GitHub
    if (response.status === 200) {
        const data = await response.json()
        props.onSubmit(data)  // passing the parent (App) the data we got from GitHub
        setUsername('')  // reset the username (clearing the userName state of the Form component)
    } else {
        alert('Username not found')
    }
  }

  return (
    <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
      <div className='mt-10 flex'>
        <input
          name='username'
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}  // when the username is updated, we are notified in the onChange() event callback
          className='form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <button
          type='submit'
          className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
