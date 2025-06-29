import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)


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
      let largeBoxNumber = ((a * 3) + b)
      let smallBoxNumber = ((c * 3) + d)
      
      const onInputChange = (event) => {
        const inputNumber = event.target.value
        setResponce((inputNumber < 1 || inputNumber > 9))
        if (inputNumber < 1 || inputNumber > 9) return  
        const updatedValuesList = [...arrayOfBoxes]
        updatedValuesList[largeBoxNumber][smallBoxNumber] = inputNumber
        const updatedClassList1 = [...classOfBox]
        const preventError = [...arrayOfBoxes]
        preventError[largeBoxNumber][smallBoxNumber] = 0
        let doesLargeBoxContainDuplicats = (preventError[largeBoxNumber].includes(inputNumber))
        // if (doesLargeBoxContainDuplicats === true) updatedClassList1[largeBoxNumber][smallBoxNumber] = "errorInputBox"
        // else updatedClassList1[largeBoxNumber][smallBoxNumber] = "inputBox"
        updatedClassList1[largeBoxNumber][smallBoxNumber] = doesLargeBoxContainDuplicats ? "errorInputBox" : "inputBox"
        const updatedClassList2 = updatedClassList1
        let otherNumber = 0
        // if (doesLargeBoxContainDuplicats === true) updatedClassList2[largeBoxNumber][otherNumber] = "errorInputBox"
        // else updatedClassList2[largeBoxNumber][otherNumber] = "inputBox"
        updatedClassList2[largeBoxNumber][otherNumber] = doesLargeBoxContainDuplicats ? "errorInputBox" : "inputBox"
        const updatedClassList3 = updatedClassList2
        const updatedClassList7 = []
          for (let e = 0; e < 3; e++) {
            let largeRowBox = (a + e)
            let doesRowcontainDuplicates = (preventError[largeRowBox][c] === inputNumber)
            // if (doesRowcontainDuplicates === true) updatedClassList3[largeRowBox][c] = "errorInputBox"
            // else updatedClassList3[largeRowBox][c] = "inputBox"
            updatedClassList3[largeRowBox][c] = doesRowcontainDuplicates ? "errorInputBox" : "inputBox"
            const updatedClassList4 = updatedClassList3
            // if (doesRowcontainDuplicates === true) updatedClassList3[largeBoxNumber][smallBoxNumber] = "errorInputBox"
            // else updatedClassList3[largeBoxNumber][smallBoxNumber] = "inputBox"
            updatedClassList3[largeBoxNumber][smallBoxNumber] = doesRowcontainDuplicates ? "errorInputBox" : "inputBox"
            const updatedClassList5 = updatedClassList4
            
            for (let f = 0; f < 3; f++) {
              let largeCollemBox = ((Math.floor(largeBoxNumber / 3)) + e)
              let smallCollemBox = ((Math.floor(smallBoxNumber / 3)) + f)
              let doesCollemContainDuplicates = (preventError[largeCollemBox][smallCollemBox] === inputNumber)
              // if (doesCollemContainDuplicates === true) updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
              // else updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
              updatedClassList5[largeCollemBox][smallCollemBox] = doesCollemContainDuplicates ? "errorInputBox" : "inputBox"
              const updatedClassList6 = updatedClassList5
              // if (doesCollemContainDuplicates === true) updatedClassList5[largeBoxNumber][smallBoxNumber] = "errorInputBox"
              // else updatedClassList5[largeBoxNumber][smallBoxNumber] = "errorInputBox"      
              updatedClassList6[largeBoxNumber][smallBoxNumber] = doesCollemContainDuplicates ? "errorInputBox" : "inputBox"
              updatedClassList7.push(updatedClassList6)
            }
          }
        setClassOfBox(updatedClassList7)
        setArrayOfBoxes(updatedValuesList)
        console.log(classOfBox)
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
        {responce ? "only values 1 to 9" : null}
      </div>
      <div>
          {createGrid()}
      </div>
    </>
  )
}

export default App
