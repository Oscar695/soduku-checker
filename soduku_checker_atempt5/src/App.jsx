import { useEffect, useState } from 'react'
import './App.css'
// import ThreeLongRow from './ThreeLongRow'
// import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
// import ErrorChecking from './ErrorChecking'

function App() {
  const [NoOfLargeBoxesLong, setNoOfLargeBoxesLong] = useState(3)
  const [NoOfLargeBoxesTall, setNoOfLargeBoxesTall] = useState(3)
  const [NoOfSmallBoxesLong, setNoOfSmallBoxesLong] = useState(3)
  const [NoOfSmallBoxesTall, setNoOfSmallBoxesTall] = useState(3)
  const [NoOfLargeBoxes, setNoOfLargeBoxes] = useState(9)
  const [NoOfSmallBoxes, setNoOfSmallBoxes] = useState(9)
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [valueOfBox, setValueOfBox] = useState(405)

  const createGrid = () => {
  const fullGrid = []
    console.log(typeof NoOfLargeBoxesTall)
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
        const updatedClassList1 = defaultClassOfBox.map(inner => [...inner])
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
              let doesLargeBoxContainDuplicats = (preventError2[g].includes(currentNumber))
              if (doesLargeBoxContainDuplicats) updatedClassList1[g][h] = "errorInputBox"
              for (let e = 0; e < NoOfLargeBoxesLong; e++) {
                for (let f = 0; f < NoOfSmallBoxesLong; f++) { 
                  // row checker
                  let largeRowBox = (((Math.floor(g / NoOfLargeBoxesLong)) * NoOfLargeBoxesLong) + e)
                  let smallRowBox = (((Math.floor(h / NoOfSmallBoxesLong)) * NoOfSmallBoxesLong) + f)
                  let doesRowcontainDuplicates = (preventError2[largeRowBox][smallRowBox] === currentNumber)
                  if (doesRowcontainDuplicates) updatedClassList1[largeRowBox][smallRowBox] = "errorInputBox"
                  if (doesRowcontainDuplicates) updatedClassList1[g][h] = "errorInputBox"
                  // collem checker
                  let largeCollemBox = ((g % NoOfLargeBoxesLong) + (NoOfLargeBoxesLong * e))
                  console.log(largeCollemBox)
                  let smallCollemBox = ((h % NoOfSmallBoxesLong) + (NoOfSmallBoxesLong * f))
                  console.log(smallCollemBox)
                  console.log(preventError2)
                  let doesCollemContainDuplicates = (preventError2[largeCollemBox][smallCollemBox] === currentNumber)
                  if (doesCollemContainDuplicates) updatedClassList1[largeCollemBox][smallCollemBox] = "errorInputBox"    
                  if (doesCollemContainDuplicates) updatedClassList1[g][h] = "errorInputBox"
                  setClassOfBox(updatedClassList1)
                  if ((updatedClassList1.includes("errorInputBox") === false) && (counter1 === (valueOfBox * NoOfLargeBoxes))) setWin(true)
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
  const updateHightSmallBoxesWidthOfLargeBoxes = (event) => {
    const input = parseInt(event.target.value)
    setNoOfLargeBoxesLong(input)
    setNoOfSmallBoxesTall(input)
    const numberOfBoxes = input * NoOfLargeBoxesTall
    setNoOfLargeBoxes(numberOfBoxes)
    setNoOfSmallBoxes(numberOfBoxes)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setValueOfBox((numberOfBoxes) * ((numberOfBoxes + 1) / 2))
  }
  const updateWidthSmallBoxesHightOfLargeBoxes = (event) => {
    const input = parseInt(event.target.value)
    setNoOfLargeBoxesTall(input)
    setNoOfSmallBoxesLong(input)
    const numberOfBoxes = input * NoOfLargeBoxesLong
    setNoOfLargeBoxes(numberOfBoxes)
    setNoOfSmallBoxes(numberOfBoxes)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setValueOfBox((numberOfBoxes) * ((numberOfBoxes + 1) / 2))
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
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={updateHightSmallBoxesWidthOfLargeBoxes}/>
        </div>
        <div className="lineUp">
          length
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={updateWidthSmallBoxesHightOfLargeBoxes}/>
        </div>
      </div>
    </div>
    )
    return sizeOfGrid
  }






  return (
    <>
      <div>
        {responce ? "only values 1 to" + " " + NoOfSmallBoxes : null}
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
