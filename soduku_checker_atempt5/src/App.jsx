import { useEffect, useState } from 'react'
import './App.css'
import CreateThreeLongRow from './ThreeLongRow'
import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
import ErrorChecking from './ErrorChecking'

function App() {
  const [NoOfLargeBoxesLong, setNoOfLargeBoxesLong] = useState(3)
  const [NoOfLargeBoxesTall, setNoOfLargeBoxesTall] = useState(3)
  const [NoOfSmallBoxesLong, setNoOfSmallBoxesLong] = useState(3)
  const [NoOfSmallBoxesTall, setNoOfSmallBoxesTall] = useState(3)
  const [NoOfLargeBoxes, setNoOfLargeBoxes] = useState(9)
  const [NoOfSmallBoxes, setNoOfSmallBoxes] = useState(9)
  const [currentGuess, setCurrentGuess] = useState("")
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [zero, setZero] = useState(0)
  const [valueOfBox, setValueOfBox] = useState(405)

  const createGrid = () => {
  const fullGrid = []
    for (let a = 0; a < NoOfLargeBoxesTall; a++) {
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
    for (let b = 0; b < NoOfLargeBoxesLong; b++) {
      // 3 large boxs
      const collemLineThickLong = <div className="collemLineThickLong"></div>
      const rowOfLargeBoxes = <div>{createLargeBox(a, b)}</div>
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === (NoOfLargeBoxesLong - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  const createLargeBox = (a, b) => {
    const largeBox = []
    for (let c = 0; c < NoOfSmallBoxesTall; c++) {
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
      if (c === (NoOfSmallBoxesTall - 1)) largeBox.push(rowLineThickShort)
    }
    return largeBox
  }
  const createThreeLongRow = (a, b, c) => {
    const boxes = []
    for (let d = 0; d < NoOfSmallBoxesLong; d++) {
      // line of 3 Small boxes
      const collemLineThickShort = <div className="collemLineThickShort"></div>
      if (d === 0) boxes.push(collemLineThickShort)
      let boxClass = "numberBox"
      const collemLineThin = <div className="collemLineThin"></div>
      if (d !== 0) boxes.push(collemLineThin)
      let smallBoxNumber = ((c * NoOfSmallBoxesLong) + d)
      let largeBoxNumber = ((a * NoOfLargeBoxesLong) + b)

       const onInputChange = (event) => {
        let counter1 = 0
        const inputNumber = event.target.value
        if (((inputNumber < 1) || (inputNumber > NoOfSmallBoxes)) && (inputNumber !== "")) setResponce(true)
        else setResponce(false)
        const updatedClassListMinus1 = defaultClassOfBox.map(inner => [...inner])
        for (let g = 0; g < NoOfLargeBoxes; g++) {
          for (let h = 0; h < NoOfSmallBoxes; h++) {
            const updatedValuesList1 = arrayOfBoxes.map(inner => [...inner])
            updatedValuesList1[largeBoxNumber][smallBoxNumber] = inputNumber
            const updatedValuesList2 = updatedValuesList1
            const preventError1 = arrayOfBoxes.map(inner => [...inner])
            preventError1[largeBoxNumber][smallBoxNumber] = inputNumber
            const preventError2 = preventError1
            preventError2[g][h] = 0
            let currentNumber = updatedValuesList1[g][h]
            if ((typeof currentNumber === typeof "") && (currentNumber !== "")) {
              counter1 = (counter1 + parseInt(currentNumber))
              setTotalValue(counter1)
              // box checker
              const updatedClassList0 = updatedClassListMinus1
              let doesLargeBoxContainDuplicats = (preventError2[g].includes(currentNumber))
              const updatedClassList1 = updatedClassList0
              if (doesLargeBoxContainDuplicats) updatedClassList1[g][h] = "errorInputBox"
              const updatedClassList2 = updatedClassList1
              const updatedClassList3 = updatedClassList2
              for (let e = 0; e < NoOfLargeBoxesLong; e++) {
                for (let f = 0; f < NoOfSmallBoxesLong; f++) { 
                  // row checker
                  let largeRowBox = (((Math.floor(g / NoOfLargeBoxesLong)) * NoOfLargeBoxesLong) + e)
                  let smallRowBox = (((Math.floor(h / NoOfSmallBoxesLong)) * NoOfSmallBoxesLong) + f)
                  let doesRowcontainDuplicates = (preventError2[largeRowBox][smallRowBox] === currentNumber)
                  if (doesRowcontainDuplicates) updatedClassList3[largeRowBox][smallRowBox] = "errorInputBox"
                  const updatedClassList4 = updatedClassList3
                  if (doesRowcontainDuplicates) updatedClassList3[g][h] = "errorInputBox"
                  const updatedClassList5 = updatedClassList4
                  // collem checker
                  let largeCollemBox = ((g % NoOfLargeBoxesLong) + (NoOfLargeBoxesLong * e))
                  let smallCollemBox = ((h % NoOfSmallBoxesLong) + (NoOfSmallBoxesLong * f))
                  let doesCollemContainDuplicates = (preventError2[largeCollemBox][smallCollemBox] === currentNumber)
                  if (doesCollemContainDuplicates) updatedClassList5[largeCollemBox][smallCollemBox] = "errorInputBox"
                  const updatedClassList6 = updatedClassList5     
                  if (doesCollemContainDuplicates) updatedClassList6[g][h] = "errorInputBox"
                  setClassOfBox(updatedClassList6)
                  if ((updatedClassList6.includes("errorInputBox") === false) && (counter1 === (valueOfBox * NoOfLargeBoxes))) setWin(true)
                  if (counter1 !== (valueOfBox * NoOfLargeBoxes)) setWin(false)
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
  const hello1 = (event) => {
    const hello1value = event.target.value
    setNoOfLargeBoxesLong(hello1value)
    const hello5 = hello1value * NoOfLargeBoxesTall
    setNoOfLargeBoxes(hello5)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setNoOfSmallBoxesTall(hello1value)
    setNoOfSmallBoxes(hello5)
    setValueOfBox((hello5) * ((hello5 + 1) / 2))
  }
  const hello2 = (event) => {
    const hello2value = event.target.value
    setNoOfLargeBoxesTall(hello2value)
    const hello6 = hello2value * NoOfLargeBoxesLong
    setNoOfLargeBoxes(hello6)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setNoOfSmallBoxesLong(hello2value)
    setNoOfSmallBoxes(hello6)
    setValueOfBox((hello6) * ((hello6 + 1) / 2))
  }
  const hello3 = (event) => {
    const hello3value = event.target.value
    setNoOfSmallBoxesLong(hello3value)
    const hello7 = hello3value * NoOfSmallBoxesTall
    setNoOfSmallBoxes(hello7)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(hello7).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(hello7).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(hello7).fill("inputBox")))
    setValueOfBox((hello7) * ((hello7 + 1) / 2))
  }
  const hello4 = (event) => {
    const hello4value = event.target.value
    setNoOfSmallBoxesTall(hello4value)
    const hello8 = hello4value * NoOfSmallBoxesLong
    setNoOfSmallBoxes(hello8)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(hello8).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(hello8).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(hello8).fill("inputBox")))
    setValueOfBox((hello8) * ((hello8 + 1) / 2))
  }
  const sizeOfSodukuGrid = () => {
  const sizeOfGrid =  (
    <div>
      <div>
        <div className="lineUp">
          grid size
        </div>
        <div className="lineUp">
          with 
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={hello1}/>
        </div>
        <div className="lineUp">
          length
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={hello2}/>
        </div>
      </div>
    </div>
    )
    return sizeOfGrid
  }






  return (
    <>
      <div>
        {responce ? "only values 1 to" + " " +{NoOfSmallBoxes} : null}
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
      <div>
        {sizeOfSodukuGrid()}
      </div>
    </>
  )
}

export default App
