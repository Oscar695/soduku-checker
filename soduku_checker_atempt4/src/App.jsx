import { useEffect, useState } from 'react'
import './App.css'
import CreateThreeLongRow from './ThreeLongRow'
import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
import ErrorChecking from './ErrorChecking'

function App() {
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [zero, setZero] = useState(0)

  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < 3; a++) {
      // full soduku
      const rowLineThickLong = <div className="rowLineThickLong"></div>
      if (a === 0) fullGrid.push(rowLineThickLong)
      const grid = <div className="lineUp">{createThreeLongSetOfLargeBoxes(a)}</div>
      //<ThreeLongSetOfLargeBoxes a={a}/>
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
      const row = <div className="lineUp">
        {/* <ThreeLongRow
        a={a}
        b={b}
        c={c}
        defaultClassOfBox={defaultClassOfBox}
        arrayOfBoxes={arrayOfBoxes}
        setClassOfBox={setClassOfBox}
        setArrayOfBoxes={setArrayOfBoxes}/> */}
        {createThreeLongRow(a, b, c)}
      </div>
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
      let smallBoxNumber = ((c * 3) + d)
      let largeBoxNumber = ((a * 3) + b)

      const onInputChange = (event) => {
        let counter = 0
        const inputNumber = event.target.value
        const updatedClassListMinus1 = defaultClassOfBox.map(inner => [...inner])
        for (let g = 0; g < 9; g++) {
          for (let h = 0; h < 9; h++) {
            const updatedValuesList1 = arrayOfBoxes.map(inner => [...inner])
            updatedValuesList1[largeBoxNumber][smallBoxNumber] = inputNumber
            const updatedValuesList2 = updatedValuesList1
            const preventError1 = arrayOfBoxes.map(inner => [...inner])
            preventError1[largeBoxNumber][smallBoxNumber] = inputNumber
            const preventError2 = preventError1
            preventError2[g][h] = 0
            let currentNumber = updatedValuesList1[g][h]
            if ((typeof currentNumber === typeof "") && (currentNumber !== "")) {
              counter = (counter + parseInt(currentNumber))
              setTotalValue(counter)
              // box checker
              const updatedClassList0 = updatedClassListMinus1
              let doesLargeBoxContainDuplicats = (preventError2[g].includes(currentNumber))
              const updatedClassList1 = updatedClassList0
              if (doesLargeBoxContainDuplicats) updatedClassList1[g][h] = "errorInputBox"
              const updatedClassList2 = updatedClassList1
              // let whereIsTheDuplicate = (preventError2[g][h] === currentNumber)
              // console.log(whereIsTheDuplicate)
              // if (whereIsTheDuplicate) updatedClassList2[g][h] = "errorInputBox"
              const updatedClassList3 = updatedClassList2
              for (let e = 0; e < 3; e++) {
                for (let f = 0; f < 3; f++) { 
                  // row checker
                  let largeRowBox = (((Math.floor(g / 3)) * 3) + e)
                  let smallRowBox = (((Math.floor(h / 3)) * 3) + f)
                  let doesRowcontainDuplicates = (preventError2[largeRowBox][smallRowBox] === currentNumber)
                  if (doesRowcontainDuplicates) updatedClassList3[largeRowBox][smallRowBox] = "errorInputBox"
                  const updatedClassList4 = updatedClassList3
                  if (doesRowcontainDuplicates) updatedClassList3[g][h] = "errorInputBox"
                  const updatedClassList5 = updatedClassList4
                  // collem checker
                  let largeCollemBox = ((g % 3) + (3 * e))
                  let smallCollemBox = ((h % 3) + (3 * f))
                  let doesCollemContainDuplicates = (preventError2[largeCollemBox][smallCollemBox] === currentNumber)
                  if (doesCollemContainDuplicates) updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
                  const updatedClassList6 = updatedClassList5     
                  if (doesCollemContainDuplicates) updatedClassList6[g][h] = "errorInputBox"
                  setClassOfBox(updatedClassList6)
                  if ((updatedClassList6.includes("errorInputBox") === false) && (totalValue === (45 * 9))) setWin(true)
                }
              }
            }
            setArrayOfBoxes(updatedValuesList2)  
          }
        }
      }
      // const onInputChange = () => {<ErrorChecking
      // defaultClassOfBox={defaultClassOfBox}
      // arrayOfBoxes={arrayOfBoxes}
      // largeBoxNumber={largeBoxNumber}
      // smallBoxNumber={smallBoxNumber}
      // setClassOfBox={setClassOfBox}
      // setArrayOfBoxes={setArrayOfBoxes}/>}
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
        {/* <ErrorChecking
          IDK what to do with this
          defaultClassOfBox = {defaultClassOfBox}
          arrayOfBoxes = {arrayOfBoxes}
          largeBoxNumber = {largeBoxNumber}
          smallBoxNumber = {smallBoxNumber}
          setClassOfBox = {setClassOfBox}
          setArrayOfBoxes = {setArrayOfBoxes}
        /> */}
    </>
  )
}

export default App
