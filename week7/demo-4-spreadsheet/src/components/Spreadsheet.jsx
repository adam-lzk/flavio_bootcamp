import { useState, useEffect } from 'react'
import Cell from './Cell'

function Spreadsheet() {
  const [data, setData] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
  ])

  useEffect(() => {
    const storedData = window.localStorage.getItem('spreadsheet')
    if (storedData) setData(JSON.parse(storedData))
  }, [window.localStorage])  // ????????

  function updateValue(x, y, value) {
    const new_data = structuredClone(data)  // structuredClone() - a built-in JavaScript function we can use to clone anything
    new_data[y][x] = value
    setData(new_data)

    if (window && window.localStorage) {  // ????????
      window.localStorage.setItem('spreadsheet', JSON.stringify(new_data))
    }
  }

  /* possible grid-cols-* values are grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 */
  return (
    <div className={`grid grid-cols-${data[0].length}`}>
      {data.map((array, y) => {
        return array.map((item, x) => {
          return (
            <Cell
              key={y + '-' + x}
              value={item}
              x={x}
              y={y}
              updateValue={updateValue}
            />
          )
        })
      })}
    </div>
  )
}

export default Spreadsheet
