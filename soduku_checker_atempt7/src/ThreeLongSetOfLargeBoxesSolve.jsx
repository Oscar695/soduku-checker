import LargeBoxSolve from "./LargeBoxSolve"
import "./ThreeLongSetOfLargeBoxes.css"

const ThreeLongSetOfLargeBoxesSolve = ({
  a,
  setWin,
  classOfBox,
  valueOfBox,
  setResponce,
  arrayOfBoxes,
  numberOfBoxes,
  setClassOfBox,
  setArrayOfBoxes,
  defaultClassOfBox,
  numberOfLargeBoxesLongAndNoOfSmallBoxesTall,
  numberOfLargeBoxesTallAndNoOfSmallBoxesLong,
}) => {
  const createThreeLongSetOfLargeBoxes = () => {
    const threeLongSetOfLargeBoxes = []
    for (let b = 0; b < numberOfLargeBoxesLongAndNoOfSmallBoxesTall; b++) {
      // 3 large boxs
      const thickCollemHight = {height: `${(2 * numberOfLargeBoxesLongAndNoOfSmallBoxesTall) + ((numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1) * 0.1)}em`}
      const collemLineThickLong = <div className="collemLineThickLong" style={thickCollemHight}></div>
      const rowOfLargeBoxes = <LargeBoxSolve
        a={a}
        b={b}
        setWin={setWin}
        classOfBox={classOfBox}
        valueOfBox={valueOfBox}
        setResponce={setResponce}
        arrayOfBoxes={arrayOfBoxes}
        numberOfBoxes={numberOfBoxes}
        setClassOfBox={setClassOfBox}
        setArrayOfBoxes={setArrayOfBoxes}
        defaultClassOfBox={defaultClassOfBox}
        numberOfLargeBoxesLongAndNoOfSmallBoxesTall={numberOfLargeBoxesLongAndNoOfSmallBoxesTall}
        numberOfLargeBoxesTallAndNoOfSmallBoxesLong={numberOfLargeBoxesTallAndNoOfSmallBoxesLong}
      />
      threeLongSetOfLargeBoxes.push(rowOfLargeBoxes)
      if (b === (numberOfLargeBoxesLongAndNoOfSmallBoxesTall - 1)) threeLongSetOfLargeBoxes.push(collemLineThickLong)
    }
    return threeLongSetOfLargeBoxes
  }
  return <div className="lineUp">{createThreeLongSetOfLargeBoxes()}</div>
}  

export default ThreeLongSetOfLargeBoxesSolve