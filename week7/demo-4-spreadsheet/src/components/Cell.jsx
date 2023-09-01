import { useState, useEffect } from 'react'

function Cell({ value, x, y, updateValue }) {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    window.document.addEventListener('unselectAll', () => {  // a listener for unselectAll event
      setSelected(false)
    })
  }, [])  // we wrap this in a useEffect, because we only want this to run when the component is added to the DOM, not on every rerender

  if (selected) {
    return (
      <input
        className='p-3 border-2'
        value={value}
        onChange={(e) => {
          updateValue(x, y, e.target.value)
        }}
      />
    )
  }
  return (
    <div
      className='p-3 border-2'
      onClick={(e) => {
        window.document.dispatchEvent(new Event('unselectAll'))  // a custom event
        setSelected(true)
      }}>
      {value || <span className='text-gray-200'>-</span>}
    </div>  // if the value exists -> value. if not -> -
  )
}

export default Cell
