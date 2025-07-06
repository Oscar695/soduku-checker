import { useEffect, useState } from 'react'
import './App.css'
import GridInput from './GridInput'
import GridSolve from './GridSolve'
import SetingsInput from './SetingsInput'
import SetingsSolve from './SetingsSolve'

function App() {
  const [numberOfLargeBoxesLongAndNoOfSmallBoxesTall, setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall] = useState(3)
  const [numberOfLargeBoxesTallAndNoOfSmallBoxesLong, setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong] = useState(3)
  const [numberOfBoxes, setNumberOfBoxes] = useState(9)
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [arrayOfBoxesSmallCenter, setArrayOfBoxesSmallCenter] = useState(new Array(9).fill(new Array(9).fill([])))
  const [arrayOfBoxesSmallEdge, setArrayOfBoxesSmallEdge] = useState(new Array(9).fill(new Array(9).fill([])))
  const [arrayOfBoxesInput, setArrayOfBoxesInput] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [valueOfBox, setValueOfBox] = useState(45)
  const [solvePage, setSolvePage] = useState(false)
  const [inputPage, setInputPage] = useState(true)
  const [classOfBoxInput, setClassOfBoxInput] = useState(new Array(9).fill(new Array(9).fill("setValue")))
  const [defaultClassOfBoxInput, setDeafultClassOfBoxInput] = useState(new Array(9).fill(new Array(9).fill("setValue")))
  const [checked2By2, setChecked2By2] = useState(false)
  const [checked3By2, setChecked3By2] = useState(false)
  const [checked3By3, setChecked3By3] = useState(true)
  const [largeNumbersButton, setLargeNumbersButton] = useState("setingsSolveButtonLargeNumbersHighlighted")
  const [smallNumbersButton, setsmallNumbersButton] = useState("setingsSolveButtonSmallNumbers")
  const [smallCenterNumbersButton, setSmallCenterNumbersButton] = useState("setingsSolveButtonSmallCenterNumbers")
  const [largeNumbers, setLargeNumbers] = useState(true)
  const [smallNumbers, setSmallNumbers] = useState(false)
  const [smallCenterNumbers, setSmallCenterNumbers] = useState(false)


  const smallCenterNumbersButtonPresed = () => {
    setLargeNumbersButton("setingsSolveButtonLargeNumbers")
    setsmallNumbersButton("setingsSolveButtonSmallNumbers")
    setSmallCenterNumbersButton("setingsSolveButtonSmallCenterNumbersHighlighted")
    setLargeNumbers(false)
    setSmallNumbers(false)
    setSmallCenterNumbers(true)
  }


  const largeNumbersButtonPresed = () => {
    setLargeNumbersButton("setingsSolveButtonLargeNumbersHighlighted")
    setsmallNumbersButton("setingsSolveButtonSmallNumbers")
    setSmallCenterNumbersButton("setingsSolveButtonSmallCenterNumbers")
    setLargeNumbers(true)
    setSmallNumbers(false)
    setSmallCenterNumbers(false)
  }

  const smallNumbersButtonPresed = () => {
    setLargeNumbersButton("setingsSolveButtonLargeNumbers")
    setsmallNumbersButton("setingsSolveButtonSmallNumbersHighlighted")
    setSmallCenterNumbersButton("setingsSolveButtonSmallCenterNumbers")
    setLargeNumbers(false)
    setSmallNumbers(true)
    setSmallCenterNumbers(false)
  }

  const preMadeGrid2By2 = () => {
    setChecked2By2(true)
    setChecked3By2(false)
    setChecked3By3(false)
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(2)
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(2)
    setNumberOfBoxes(4)
    setArrayOfBoxes(new Array(4).fill(new Array(4).fill([])))
    setArrayOfBoxesInput(new Array(4).fill(new Array(4).fill([])))
    setClassOfBox(new Array(4).fill(new Array(4).fill("inputBox")))
    setDeafultClassOfBox(new Array(4).fill(new Array(4).fill("inputBox")))
    setClassOfBoxInput(new Array(4).fill(new Array(4).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(4).fill(new Array(4).fill("setValue")))
    setValueOfBox(10)
    setArrayOfBoxesSmallCenter(new Array(4).fill(new Array(4).fill([])))
    setArrayOfBoxesSmallEdge(new Array(4).fill(new Array(4).fill([])))
  }

  const preMadeGrid3By2 = () => {
    setChecked2By2(false)
    setChecked3By2(true)
    setChecked3By3(false)
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(3)
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(2)
    setNumberOfBoxes(6)
    setArrayOfBoxes(new Array(6).fill(new Array(6).fill([])))
    setArrayOfBoxesInput(new Array(6).fill(new Array(6).fill([])))
    setClassOfBox(new Array(6).fill(new Array(6).fill("inputBox")))
    setDeafultClassOfBox(new Array(6).fill(new Array(6).fill("inputBox")))
    setClassOfBoxInput(new Array(6).fill(new Array(6).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(6).fill(new Array(6).fill("setValue")))
    setValueOfBox(21)
    setArrayOfBoxesSmallCenter(new Array(6).fill(new Array(6).fill([])))
    setArrayOfBoxesSmallEdge(new Array(6).fill(new Array(6).fill([])))
  }

  const preMadeGrid3By3 = () => {
    setChecked2By2(false)
    setChecked3By2(false)
    setChecked3By3(true)
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(3)
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(3)
    setNumberOfBoxes(9)
    setArrayOfBoxes(new Array(9).fill(new Array(9).fill([])))
    setArrayOfBoxesInput(new Array(9).fill(new Array(9).fill([])))
    setClassOfBox(new Array(9).fill(new Array(9).fill("inputBox")))
    setDeafultClassOfBox(new Array(9).fill(new Array(9).fill("inputBox")))
    setClassOfBoxInput(new Array(9).fill(new Array(9).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(9).fill(new Array(9).fill("setValue")))
    setValueOfBox(45)
    setArrayOfBoxesSmallCenter(new Array(9).fill(new Array(9).fill([])))
    setArrayOfBoxesSmallEdge(new Array(9).fill(new Array(9).fill([])))
  }

  const largeBoxHightSmallBoxWidth = (event) => {
    const input = event.target.value
    if ((parseInt(input) === 2) && (parseInt(numberOfLargeBoxesLongAndNoOfSmallBoxesTall) === 2)) setChecked2By2(true)
    else setChecked2By2(false)
    if ((parseInt(input) === 3) && (parseInt(numberOfLargeBoxesLongAndNoOfSmallBoxesTall) === 2)) setChecked3By2(true)
    else setChecked3By2(false)
    if ((parseInt(input) === 3) && (parseInt(numberOfLargeBoxesLongAndNoOfSmallBoxesTall) === 3)) setChecked3By3(true)
    else setChecked3By3(false)
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(input)
    const NoOfboxes = input * numberOfLargeBoxesLongAndNoOfSmallBoxesTall
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setArrayOfBoxesInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
    setArrayOfBoxesSmallCenter(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setArrayOfBoxesSmallEdge(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
  }
  const largeBoxWidthSmallBoxHight = (event) => {
    const input = event.target.value
    if ((parseInt(input) === 2) && (parseInt(numberOfLargeBoxesTallAndNoOfSmallBoxesLong) === 2)) setChecked2By2(true)
    else setChecked2By2(false)
    if ((parseInt(input) === 2) && (parseInt(numberOfLargeBoxesTallAndNoOfSmallBoxesLong) === 3)) setChecked3By2(true)
    else setChecked3By2(false)
    if ((parseInt(input) === 3) && (parseInt(numberOfLargeBoxesTallAndNoOfSmallBoxesLong) === 3)) setChecked3By3(true)
    else setChecked3By3(false)
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(input)
    const NoOfboxes = input * numberOfLargeBoxesTallAndNoOfSmallBoxesLong
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setArrayOfBoxesInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
    setArrayOfBoxesSmallCenter(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setArrayOfBoxesSmallEdge(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
  }
  const inputButtonPressed = () => {
    setSolvePage(false)
    setInputPage(true)
  }

  const solveButtonPressed = () => {
    setSolvePage(true)
    setInputPage(false)
    const updatedClassList = defaultClassOfBox.map(inner => [...inner])
    for (let a = 0; a < numberOfBoxes; a++) {
      for (let b = 0; b < numberOfBoxes; b++) {
        if ((arrayOfBoxesInput[a][b] !== "") && (typeof arrayOfBoxesInput[a][b] === typeof "")) {
          updatedClassList[a][b] = "setValue"
        }
      }
    }
    setDeafultClassOfBox(updatedClassList)
  }

  const theInputPage = () => {
    return (
      <div className="lineUp">
        <div>
          {responce ? "only values 1 to" + " " + numberOfBoxes : null}
        </div>
        <div className="lineUp">
          <GridInput
            setWin={setWin}
            valueOfBox={valueOfBox}
            setResponce={setResponce}
            numberOfBoxes={numberOfBoxes}
            classOfBoxInput={classOfBoxInput}
            setArrayOfBoxes={setArrayOfBoxes}
            arrayOfBoxesInput={arrayOfBoxesInput}
            setClassOfBoxInput={setClassOfBoxInput}
            setArrayOfBoxesInput={setArrayOfBoxesInput}
            defaultClassOfBoxInput={defaultClassOfBoxInput}
            numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
            numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
          />
        </div>
        <div className="setings">
          <SetingsInput
            checked2By2={checked2By2}
            checked3By2={checked3By2}
            checked3By3={checked3By3}
            preMadeGrid2By2={preMadeGrid2By2}
            preMadeGrid3By2={preMadeGrid3By2}
            preMadeGrid3By3={preMadeGrid3By3}
            largeBoxHightSmallBoxWidth={largeBoxHightSmallBoxWidth}
            largeBoxWidthSmallBoxHight={largeBoxWidthSmallBoxHight}
            numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
            numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
          />
        </div>   
      </div>
    )
  }

  const theSolvePage = () => {
    return (
      <div className="lineUp">
        <div>
          {responce ? "only values 1 to" + " " + numberOfBoxes : null}
          {win ? "you win yay" : null}
        </div>
        <div className="lineUp">
          <GridSolve
            setWin={setWin}
            classOfBox={classOfBox}
            valueOfBox={valueOfBox}
            setResponce={setResponce}
            arrayOfBoxes={arrayOfBoxes}
            largeNumbers={largeNumbers}
            smallNumbers={smallNumbers}
            numberOfBoxes={numberOfBoxes}
            setClassOfBox={setClassOfBox}
            setArrayOfBoxes={setArrayOfBoxes}
            defaultClassOfBox={defaultClassOfBox}
            smallCenterNumbers={smallCenterNumbers}
            arrayOfBoxesSmallEdge={arrayOfBoxesSmallEdge}
            arrayOfBoxesSmallCenter={arrayOfBoxesSmallCenter}
            setArrayOfBoxesSmallEdge={setArrayOfBoxesSmallEdge}
            setArrayOfBoxesSmallCenter={setArrayOfBoxesSmallCenter}
            numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
            numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
          />
        </div>
        <div className="setings">
          <SetingsSolve
            smallNumbers={smallNumbers}
            largeNumbers={largeNumbers}
            largeNumbersButton={largeNumbersButton}
            smallCenterNumbers={smallCenterNumbers}
            smallNumbersButton={smallNumbersButton}
            largeNumbersButtonPresed={largeNumbersButtonPresed}
            smallCenterNumbersButton={smallCenterNumbersButton}
            smallNumbersButtonPresed={smallNumbersButtonPresed}
            smallCenterNumbersButtonPresed={smallCenterNumbersButtonPresed}
          />
        </div>
      </div>
    )
  }


  return (
    <>
      {/* swap page button */}
      <div className="lineUpButtons">
        <div className="seperation"></div>
        <button className="inputButton" onClick={inputButtonPressed}>input soduku</button>
        <div className="seperation"></div>
        <button className="solveButton" onClick={solveButtonPressed}>solve soduku</button>
      </div>
      <div>
        {inputPage ? theInputPage() : null}
        {solvePage ? theSolvePage() : null}
      </div>
    </>
  )
}

export default App