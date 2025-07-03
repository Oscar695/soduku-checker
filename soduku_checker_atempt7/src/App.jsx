import { useEffect, useState } from 'react'
import './App.css'
import GridInput from './GridInput'
import GridSolve from './GridSolve'
import Setings from './Setings'

function App() {
  const [numberOfLargeBoxesLongAndNoOfSmallBoxesTall, setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall] = useState(3)
  const [numberOfLargeBoxesTallAndNoOfSmallBoxesLong, setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong] = useState(3)
  const [numberOfBoxes, setNumberOfBoxes] = useState(9)
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [valueOfBox, setValueOfBox] = useState(405)
  const [solvePage, setSolvePage] = useState(false)
  const [inputPage, setInputPage] = useState(true)
  const [classOfBoxInput, setClassOfBoxInput] = useState(new Array(9).fill(new Array(9).fill("setValue")))
  const [defaultClassOfBoxInput, setDeafultClassOfBoxInput] = useState(new Array(9).fill(new Array(9).fill("setValue")))

  

  const largeBoxHightSmallBoxWidth = (event) => {
    const input = event.target.value
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(input)
    const NoOfboxes = input * numberOfLargeBoxesLongAndNoOfSmallBoxesTall
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }
  const largeBoxWidthSmallBoxHight = (event) => {
    const input = event.target.value
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(input)
    const NoOfboxes = input * numberOfLargeBoxesTallAndNoOfSmallBoxesLong
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setDeafultClassOfBoxInput(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("setValue")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
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
        if ((arrayOfBoxes[a][b] !== "") && (typeof arrayOfBoxes[a][b] === typeof "")) {
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
            numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
            numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
            setResponce={setResponce}
            defaultClassOfBox={defaultClassOfBox}
            arrayOfBoxes={arrayOfBoxes}
            numberOfBoxes={numberOfBoxes}
            setClassOfBox={setClassOfBox}
            setWin={setWin}
            valueOfBox={valueOfBox}
            setArrayOfBoxes={setArrayOfBoxes}
            classOfBoxInput={classOfBoxInput}
            setDeafultClassOfBox={setDeafultClassOfBox}
            setClassOfBoxInput={setClassOfBoxInput}
            defaultClassOfBoxInput={defaultClassOfBoxInput}
          />
        </div>
        <div className="setings">
          <Setings
            largeBoxWidthSmallBoxHight={largeBoxWidthSmallBoxHight}
            largeBoxHightSmallBoxWidth={largeBoxHightSmallBoxWidth}
          />
        </div>   
      </div>
    )
  }

  const theSolvePage = () => {
    return (
      <div>
        <div>
          {responce ? "only values 1 to" + " " + numberOfBoxes : null}
          {win ? "you win yay" : null}
        </div>
        <div className="lineUp">
          <GridSolve
            numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
            numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
            setResponce={setResponce}
            defaultClassOfBox={defaultClassOfBox}
            arrayOfBoxes={arrayOfBoxes}
            numberOfBoxes={numberOfBoxes}
            setClassOfBox={setClassOfBox}
            setWin={setWin}
            valueOfBox={valueOfBox}
            setArrayOfBoxes={setArrayOfBoxes}
            classOfBox={classOfBox}
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


      // <div className="lineUp">
      //   {/* input page */}
      //   <div className={classOfInputPage}>
      //     <div>
      //       {responce ? "only values 1 to" + " " + numberOfBoxes : null}
      //     </div>
      //     <div className="lineUp">
      //       <GridInput
      //         numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
      //         numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
      //         setResponce={setResponce}
      //         defaultClassOfBox={defaultClassOfBox}
      //         arrayOfBoxes={arrayOfBoxes}
      //         numberOfBoxes={numberOfBoxes}
      //         setClassOfBox={setClassOfBox}
      //         setWin={setWin}
      //         valueOfBox={valueOfBox}
      //         setArrayOfBoxes={setArrayOfBoxes}
      //         classOfBoxInput={classOfBoxInput}
      //         setDeafultClassOfBox={setDeafultClassOfBox}
      //         setClassOfBoxInput={setClassOfBoxInput}
      //         defaultClassOfBoxInput={defaultClassOfBoxInput}
      //       />
      //       <div className="setings">
      //         <Setings
      //           largeBoxWidthSmallBoxHight={largeBoxWidthSmallBoxHight}
      //           largeBoxHightSmallBoxWidth={largeBoxHightSmallBoxWidth}
      //         />
      //       </div>
      //     </div>
      //   </div>
      //   {/* solve page */}
      //   <div className={classOfSolvePage}>
      //     <div>
      //       {responce ? "only values 1 to" + " " + numberOfBoxes : null}
      //       {win ? "you win yay" : null}
      //     </div>
      //     <div className="lineUp">
      //       <GridSolve
      //         numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
      //         numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
      //         setResponce={setResponce}
      //         defaultClassOfBox={defaultClassOfBox}
      //         arrayOfBoxes={arrayOfBoxes}
      //         numberOfBoxes={numberOfBoxes}
      //         setClassOfBox={setClassOfBox}
      //         setWin={setWin}
      //         valueOfBox={valueOfBox}
      //         setArrayOfBoxes={setArrayOfBoxes}
      //         classOfBox={classOfBox}
      //       />
      //     </div>
      //   </div>
      // </div>