import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
// <div className="numbers"> 
//  <input type="text" value={currentGuess} id="guessImput" onChange={onImputChange} />
//  <button onClick={() => }>
//  </button>
// </div>



  const createRow = (rowIndex) => {
    const boxes = []
    const numberInBox = 8
  for (let i = 0; i < 3; i++) {
      const box = <div className="numberBox"><input type="number" className="inputBox" max={9} min={1}></input></div>
      boxes.push(box)
    }
    return boxes
  }

const create3By3Grid = () => {
  const grid = []
    for (let i = 0; i < 3; i++) {
      const row = <div>{createRow(i)}</div>
      grid.push(row)
    }
    return grid
  }

const lineOf3by3Grids = () => {
  const grid2 = []
    for (let i = 0; i < 3; i++) {
      const row2 = <div className="A3By3Grid">{create3By3Grid(i)}</div>
      grid2.push(row2)
    }
    return grid2
}

const sodukuGrid = () => {
  const grid3 = []
  for (let i = 0; i < 3; i++) {
    const row3 = <div className="sodukuGrid">{lineOf3by3Grids(i)}</div>
    grid3.push(row3)
  }
  return grid3
}

  return (
    <>
      <div>
        <input type="number"></input>
      </div>
      <div>
        {sodukuGrid()}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
