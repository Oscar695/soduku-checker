import { useEffect, useState } from 'react'
import './App.css'
import Box from './Box'
import ThreeLongRow from './ThreeLongRow'
import LargeBox from './LargeBox'
// import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
// import ErrorChecking from './ErrorChecking'

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
      const rowOfLargeBoxes = <LargeBox
      NoOfSmallBoxesLong={NoOfSmallBoxesLong}
      NoOfLargeBoxesLong={NoOfLargeBoxesLong}
      a={a}
      b={b}
      setResponce={setResponce}
      defaultClassOfBox={defaultClassOfBox}
      arrayOfBoxes={arrayOfBoxes}
      NoOfSmallBoxes={NoOfSmallBoxes}
      NoOfLargeBoxes={NoOfLargeBoxes}
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
  const hello1 = (event) => {
    const hello1value = event.target.value
    setNoOfLargeBoxesLong(hello1value)
    const hello5 = hello1value * NoOfLargeBoxesTall
    const hello8 = hello1value * NoOfSmallBoxesTall
    setNoOfLargeBoxes(hello5)
    setArrayOfBoxes(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill([])))
    setClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfLargeBoxes).fill(new Array(NoOfSmallBoxes).fill("inputBox")))
    setNoOfSmallBoxesTall(hello1value)
    setNoOfSmallBoxes(hello8)
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
