import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)

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
     //   setResponce((inputNumber < 1 || inputNumber > 9 || inputNumber !== ""))
    //    if (inputNumber < 1 || inputNumber > 9 || inputNumber !== "") return  

        
        
        
        const updatedValuesList1 = arrayOfBoxes.map(inner => [...inner])
        updatedValuesList1[largeBoxNumber][smallBoxNumber] = inputNumber
        const updatedValuesList2 = updatedValuesList1
        const preventError = arrayOfBoxes.map(inner => [...inner])
        preventError[largeBoxNumber][smallBoxNumber] = 0

        const updatedClassListMinus1 = classOfBox.map(inner => [...inner])
        const updatedClassList0 = updatedClassListMinus1
        let emptyValue = (inputNumber === "")
        if (emptyValue) updatedClassList0[largeBoxNumber][smallBoxNumber] = "inputBox"

        let doesLargeBoxContainDuplicats = (preventError[largeBoxNumber].includes(inputNumber))
        const updatedClassList1 = updatedClassList0
        if (doesLargeBoxContainDuplicats) updatedClassList1[largeBoxNumber][smallBoxNumber] = "errorInputBox"
        const updatedClassList2 = updatedClassList1
        let otherNumber = 0
        if (doesLargeBoxContainDuplicats) updatedClassList2[largeBoxNumber][otherNumber] = "errorInputBox"
        const updatedClassList3 = updatedClassList2
          for (let e = 0; e < 3; e++) {
            for (let f = 0; f < 3; f++) {
              let largeRowBox = ((3 * a) + e)
              let smallRowBox = ((3 * c) + f)
              let doesRowcontainDuplicates = (preventError[largeRowBox][smallRowBox] === inputNumber)
              if (doesRowcontainDuplicates) updatedClassList3[largeRowBox][smallRowBox] = "errorInputBox"
              const updatedClassList4 = updatedClassList3
              if (doesRowcontainDuplicates) updatedClassList3[largeBoxNumber][smallBoxNumber] ="errorInputBox"
              const updatedClassList5 = updatedClassList4
            
              let largeCollemBox = (((largeBoxNumber % 3)) + (e * 3))
              let smallCollemBox = (((smallBoxNumber % 3)) + (f * 3))
              let doesCollemContainDuplicates = (preventError[largeCollemBox][smallCollemBox] === inputNumber)
              if (doesCollemContainDuplicates) updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
              const updatedClassList6 = updatedClassList5     
              if (doesCollemContainDuplicates) updatedClassList6[largeBoxNumber][smallBoxNumber] = "errorInputBox"
              setClassOfBox(updatedClassList6)

              // win condition
              if (((updatedClassList6.includes("errorInputBox")) === false) && (updatedValuesList2[a + b + c + d + e].includes("") === false)) setWin(true)
            }
          console.log(updatedValuesList2[a + b + c + d + e].includes("") === false)
          }
        setArrayOfBoxes(updatedValuesList2)
        
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
        {win ? "you win yay" : null}
      </div>
      <div>
          {createGrid()}
      </div>
    </>
  )
}

export default App
