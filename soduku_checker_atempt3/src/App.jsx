import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))


  const createGrid = () => {
    const fullGrid = []
    for (let a = 0; a < 3; a++) {
      // full soduku
      const rowLineThickLong = <div className="rowLineThickLong"></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <div className="lineUp">{createThreeLongSetOfLargeBoxes(a)}</div>
      fullGrid.push(grid)
    }
    return fullGrid
  }
  const createThreeLongSetOfLargeBoxes = (a) => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < 3; b++) {
      // 3 large boxs
      const collemLineThickLong = <div className="collemLineThickLong"></div>
      const rowOfLargeBoxes = <div>{createLargeBox(a, b)}</div>
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === 2) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  const createLargeBox = (a, b) => {
    const largeBox = []
    for (let c = 0; c < 3; c++) {
      // large box
      const rowLineThin = <div className="rowLineThin"></div>
      if (c !== 0) largeBox.push(rowLineThin)
      const row = <div className="lineUp">{createThreeLongRow(a, b, c)}</div>
      const rowLineThickShort = <div className="rowLineThickShort"></div>
      largeBox.push(row)
      if (c === 2) largeBox.push(rowLineThickShort)
    }
    return largeBox
  }
  const createThreeLongRow = (a, b, c) => {
    const boxes = []
    for (let d = 0; d < 3; d++) {
      // line of 3 Small boxes
      const collemLineThickShort = <div className="collemLineThickShort"></div>
      if (d === 0) boxes.push(collemLineThickShort)
      let boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (d !== 0) boxes.push(collemLineThin)
      let largeBoxNumber = ((a * 3) + (b - d) + d)
      let smallBoxNumber = ((c * 3) + d)
      
      const onInputChange = (event) => {
        const inputNumber = event.target.value
        const updatedList = [arrayOfBoxes]
        console.log([arrayOfBoxes])
        console.log(largeBoxNumber)
        console.log(smallBoxNumber)
        console.log(inputNumber)
        console.log(updatedList[0][largeBoxNumber][smallBoxNumber])
        updatedList[0][largeBoxNumber][smallBoxNumber] = inputNumber
        setArrayOfBoxes(updatedList)
      }
      
      const input = <input type="number" autoComplete="off" id="guessImput" className={classOfBox[largeBoxNumber][smallBoxNumber]} onChange={onInputChange}/>
      const box = <div className={boxClass}>{input}</div>
      boxes.push(box)
    }
    return boxes
  }

  return (
    <>
      <div>
          {createGrid()}
      </div>
    </>
  )
}

export default App
