import { useEffect, useState } from 'react'
import './App.css'
import Box from './Box'
import ThreeLongRow from './ThreeLongRow'
import LargeBox from './LargeBox'
// import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
// import ErrorChecking from './ErrorChecking'

function App() {
  const [NoOfLargeBoxesLong, setNoOfLargeBoxesLong] = useState(3)
  const [numberOfLargeBoxesLongAndNoOfSmallBoxesTall, setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall] = useState(3)
  const [numberOfLargeBoxesTallAndNoOfSmallBoxesLong, setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong] = useState(3)
  const [NoOfLargeBoxesTall, setNoOfLargeBoxesTall] = useState(3)
  const [NoOfSmallBoxesLong, setNoOfSmallBoxesLong] = useState(3)
  const [NoOfSmallBoxesTall, setNoOfSmallBoxesTall] = useState(3)
  const [NoOfLargeBoxes, setNoOfLargeBoxes] = useState(9)
  const [NoOfSmallBoxes, setNoOfSmallBoxes] = useState(9)
  const [numberOfBoxes, setNumberOfBoxes] = useState(9)
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
      const thickRowLineLength = {width: `${(NoOfLargeBoxesLong * ((2 * NoOfSmallBoxesLong) + 0.35 + ((NoOfSmallBoxesLong - 1) * 0.1)))}em`}
      const rowLineThickLong = <div className="rowLineThickLong" style={thickRowLineLength}></div>
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
      const thickCollemHight = {height: `${(2 * NoOfSmallBoxesTall) + ((NoOfSmallBoxesTall - 1) * 0.1)}em`}
      const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
      const rowOfLargeBoxes = <LargeBox
      NoOfSmallBoxesLong={NoOfSmallBoxesLong}
      NoOfLargeBoxesLong={NoOfLargeBoxesLong}
      a={a}
      b={b}
      setResponce={setResponce}
      defaultClassOfBox={defaultClassOfBox}
      arrayOfBoxes={arrayOfBoxes}
      numberOfBoxes={numberOfBoxes}
      setTotalValue={setTotalValue}
      setClassOfBox={setClassOfBox}
      setWin={setWin}
      valueOfBox={valueOfBox}
      setArrayOfBoxes={setArrayOfBoxes}
      classOfBox={classOfBox}
      NoOfSmallBoxesTall={NoOfSmallBoxesTall}/>
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === (NoOfLargeBoxesLong - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  const LargeBoxHightSmallBoxWidth = (event) => {
    const input = event.target.value
    setNoOfLargeBoxesTall(input)
    setNoOfSmallBoxesLong(input)
    const NoOfboxes = input * NoOfLargeBoxesLong
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }
  const LargeBoxWidthSmallBoxHight = (event) => {
    const input = event.target.value
    setNoOfLargeBoxesLong(input)
    setNoOfSmallBoxesTall(input)
    const NoOfboxes = input * NoOfLargeBoxesTall
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }
  const sizeOfSodukuGrid = () => {
  const sizeOfGrid =  (
    <div>
      <div>
        <div className="lineUp">
          grid size
        </div>
        <div className="lineUp">
          width 
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={LargeBoxHightSmallBoxWidth}/>
        </div>
        <div className="lineUp">
          length
          <input type="number" autoComplete="off" id="" className="inputBox" onChange={LargeBoxWidthSmallBoxHight}/>
        </div>
      </div>
    </div>
    )
    return sizeOfGrid
  }






  return (
    <>
      <div>
        {responce ? "only values 1 to" + " " + numberOfBoxes : null}
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
