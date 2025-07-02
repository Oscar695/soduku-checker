import { useEffect, useState } from 'react'
import './App.css'
import Box from './Box'
import ThreeLongRow from './ThreeLongRow'
import LargeBox from './LargeBox'
import ThreeLongSetOfLargeBoxes from './ThreeLongSetOfLargeBoxes'
import Grid from './Grid'
import Setings from './Setings'


function App() {
  const [NoOfLargeBoxesLong, setNoOfLargeBoxesLong] = useState(3)
  const [numberOfLargeBoxesLongAndNoOfSmallBoxesTall, setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall] = useState(3)
  const [numberOfLargeBoxesTallAndNoOfSmallBoxesLong, setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong] = useState(3)
  const [NoOfLargeBoxesTall, setNoOfLargeBoxesTall] = useState(3)
  const [NoOfSmallBoxesLong, setNoOfSmallBoxesLong] = useState(3)
  const [NoOfSmallBoxesTall, setNoOfSmallBoxesTall] = useState(3)
  const [numberOfBoxes, setNumberOfBoxes] = useState(9)
  const [arrayOfBoxes, setArrayOfBoxes] = useState(new Array(9).fill(new Array(9).fill([])))
  const [classOfBox, setClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [defaultClassOfBox, setDeafultClassOfBox] = useState(new Array(9).fill(new Array(9).fill("inputBox")))
  const [responce, setResponce] = useState(false)
  const [win, setWin] = useState(false)
  const [valueOfBox, setValueOfBox] = useState(405)
 // const [largeBoxHightSmallBoxWidth, setLargeBoxHightSmallBoxWidth] = useState(3)


  const largeBoxHightSmallBoxWidth = (event) => {
    const input = event.target.value
    setNoOfLargeBoxesTall(input)
    setNumberOfLargeBoxesTallAndNoOfSmallBoxesLong(input)
    setNoOfSmallBoxesLong(input)
    const NoOfboxes = input * NoOfLargeBoxesLong
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }
  const largeBoxWidthSmallBoxHight = (event) => {
    const input = event.target.value
    setNoOfLargeBoxesLong(input)
    setNumberOfLargeBoxesLongAndNoOfSmallBoxesTall(input)
    setNoOfSmallBoxesTall(input)
    const NoOfboxes = input * NoOfLargeBoxesTall
    setNumberOfBoxes(NoOfboxes)
    setArrayOfBoxes(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill([])))
    setClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setDeafultClassOfBox(new Array(NoOfboxes).fill(new Array(NoOfboxes).fill("inputBox")))
    setValueOfBox((NoOfboxes) * ((NoOfboxes + 1) / 2))
  }

  return (
    <>
      <div>
        <div>
          {responce ? "only values 1 to" + " " + numberOfBoxes : null}
          {win ? "you win yay" : null}
        </div>
        <div className="lineUp">
          <Grid
            NoOfSmallBoxesLong={NoOfSmallBoxesLong}
            NoOfLargeBoxesLong={NoOfLargeBoxesLong}
            setResponce={setResponce}
            defaultClassOfBox={defaultClassOfBox}
            arrayOfBoxes={arrayOfBoxes}
            numberOfBoxes={numberOfBoxes}
            setClassOfBox={setClassOfBox}
            setWin={setWin}
            valueOfBox={valueOfBox}
            setArrayOfBoxes={setArrayOfBoxes}
            classOfBox={classOfBox}
            NoOfSmallBoxesTall={NoOfSmallBoxesTall}
            NoOfLargeBoxesTall={NoOfLargeBoxesTall}
          />
          <div className="setings">
            <Setings
              largeBoxWidthSmallBoxHight={largeBoxWidthSmallBoxHight}
              largeBoxHightSmallBoxWidth={largeBoxHightSmallBoxWidth}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
