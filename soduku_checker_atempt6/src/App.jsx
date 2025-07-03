import { useEffect, useState } from 'react'
import './App.css'
import Grid from './Grid'
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
  const [classOfSolvePage, setclassOfSolvePage] = useState("inputPageVisible")
  const [classOfInputPage, setclassOfInputPage] = useState("solvePageInvisible")
  

  const largeBoxHightSmallBoxWidth = (event) => {
    const input = event.target.value
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(input)
    const NoOfboxes = input * numberOfLargeBoxesLongAndNoOfSmallBoxesTall
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
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
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }
  const inputButtonPressed = () => {
    setclassOfSolvePage("solvePageInvisible")
    setclassOfInputPage("inputPageVisible")
  }

  const solveButtonPressed = () => {
    setclassOfSolvePage("solvePageVisible")
    setclassOfInputPage("inputPageInvisible")
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
      <div className="lineUp">
        {/* input page */}
        <div className={classOfInputPage}>
        <div className="lineUp">
            <Grid
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
            <div className="setings">
              <Setings
                largeBoxWidthSmallBoxHight={largeBoxWidthSmallBoxHight}
                largeBoxHightSmallBoxWidth={largeBoxHightSmallBoxWidth}
              />
            </div>
          </div>
        </div>
        {/* solve page */}
        <div className={classOfSolvePage}>
          <div>
            {responce ? "only values 1 to" + " " + numberOfBoxes : null}
            {win ? "you win yay" : null}
          </div>
          <div className="lineUp">
            <Grid
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
      </div>
    </>
  )
}

export default App