import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const [arrayOfBoxes, setArrayOfBoxes] = useState([])
// <div className="numbers"> 
//  <input type="text" value={currentGuess} id="guessImput" onChange={onImputChange} />
//  <button onClick={() => }>
//  </button>
// </div>


  const onSubmitGuess = (event) => {
    event.preventDefault()
    setArrayOfBoxes([value])
  }
  const onImputChange = (event) => {
    setValue(event.target.value)
  }

  // useEffect(() => {
  //   for (let i = 0; i < 81; i++) {
  //     setArrayOfBoxes(([1] + arrayOfBoxes))
  //   }
  // }, [])

  let counter = 0

  const createRow = (rowIndex) => {
    const boxes = []
  for (let i = 0; i < 3; i++) {
     counter = counter + 1
     useEffect(() => {
      setArrayOfBoxes(([] + arrayOfBoxes))
    }, [])
      //  const submit = <button onClick={() => console.log("clicked)")}></button>
      const input = <input type="number" value={arrayOfBoxes[counter]} onChange={onImputChange} className="inputBox" max={9} min={1}></input>
      const box = <div className="numberBox"><form onSubmit={onSubmitGuess}>{input}</form>{arrayOfBoxes[counter - 1]}</div>
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
