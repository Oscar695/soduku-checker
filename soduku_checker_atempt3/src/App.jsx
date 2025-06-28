import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))

  const onInputChange = () => {
    
  }


  const createGrid = () => {
    const fullGrid = []
    for (let a = 0; a < 4; a++) {
      // full soduku
      const grid = <div>{createThreeLongSetOfLargeBoxes()}</div>
      fullGrid.push(grid)
    }
    return fullGrid
  }
  const createThreeLongSetOfLargeBoxes = () => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < 4; b++) {
      // 3 large boxs
      const rowOfLargeBoxes = <div>{createLargeBox()}</div>
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
    }
    return threeLongSetOfLargeBoxes
  }
  const createLargeBox = () => {
    const largeBox = []
    for (let c = 0; c < 4; c++) {
      // large box
      createThreeLongRow()
      const row = <div>{createThreeLongRow()}</div>
      largeBox.push(row)
    }
    return largeBox
  }

  const createThreeLongRow = () => {
    const boxes = []
    for (let d = 0; d < 3; d++) {
      // line of 3 Small boxes
      const collemLineThick = <div className="collemLineThick"></div>
      if (d === 0) boxes.push(collemLineThick)
      let boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (d !== 0 && d !== 3) boxes.push(collemLineThin)
      const input = <input type="number" autoComplete="off" id="guessImput" className="inputBox" onChange={onInputChange}/>
      const box = <div className={boxClass}>{input}</div>
      boxes.push(box)
    }
    return boxes
  }

  // const hi = () => {
  //   const grid = []

  //   for (let i = 0; i < 9; i++) {
  //     const rowLineThick = <div className="rowLineThick"></div>
  //     const rowLineThin = <div className="rowLineThin"></div>
  //     if (i !== 0 && i !== 3 && i !== 6) grid.push(rowLineThin)
  //     if (i === 0 || i === 3 || i === 6) grid.push(rowLineThick)
  //     const row = <div className="boxRow">{createRow(i)}</div>
  //     grid.push(row)
  //     if (i === 8) grid.push(rowLineThick)
  //   }
  //   return grid
  // }

  return (
    <>
      <div>
          {createGrid()}
      </div>
    </>
  )
}

export default App
